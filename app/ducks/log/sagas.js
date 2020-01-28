import { takeEvery, select, call, put, takeLatest } from 'redux-saga/effects';

import {
  globalErrorCatcher,
  safeObjectPropertyRead,
} from '@snappmarket/helpers';

import {
  logTypes,
  logActions,
  logUtils,
  logServices,
  logSelectors,
  userSelectors,
} from '..';

export function* getIpRequest() {
  try {
    const { ip } = yield call(logServices.getIp);
    yield put(logActions.getIpSuccess(ip));
  } catch (e) {
    yield globalErrorCatcher(e, false);
    yield put(
      logActions.getIpFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}

/**
 * Will queue logs on redux store
 * @param action
 */
export function* writeLog(action) {
  const { payload } = action;

  yield* sendLogRequest();

  const user = yield select(userSelectors.getProfile);
  const experiments = yield select(userSelectors.getExperiments);
  const vendorId = yield select(vendorSelectors.getVendorID);
  const ip = yield select(logSelectors.getIpAddress);
  const userAddress = yield select(userSelectors.getSelectedAddress) || {
    lat: false,
    long: false,
  };

  const normalizeLog = logUtils.normalizeLog({
    user,
    experiments,
    vendorId,
    ip,
    userAddress,
    log: payload,
  });

  yield put(logActions.appendLog(normalizeLog));
}

/**
 * Will send logs to server
 */
export function* sendLogRequest() {
  const logs = yield select(logSelectors.getLogs);

  if (logs.length >= 10) {
    try {
      yield call(logServices.sendLog, logs.join('\r\n'));
      yield put(logActions.sendLogSuccess());
      yield put(logActions.getIpRequest());
    } catch (e) {
      yield globalErrorCatcher(e);
      yield put(
        logActions.sendLogFailure(
          safeObjectPropertyRead(e, 'response.message', ''),
        ),
      );
    }
  }
}

export default [
  takeEvery(logTypes.WRITE_LOG, writeLog),
  takeLatest(logTypes.GET_IP_REQUEST, getIpRequest),
];
