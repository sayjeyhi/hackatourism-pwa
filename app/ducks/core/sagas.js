import { takeLatest, select, put, take, all } from 'redux-saga/effects';
import { globalErrorCatcher } from '@snappmarket/helpers';
import APP_INFO from 'constants/appInfo';
import {
  coreTypes,
  coreActions,
  authSelectors,
  authActions,
  coreSelectors,
  authTypes,
} from '..';

export function* initialize() {
  console.log('initialize saga ');
}

function* queueAction() {
  try {
    const refreshTokenRequestStatus = yield select(
      authSelectors.getRefreshTokenRequestStatus,
    );
    if (refreshTokenRequestStatus !== APP_INFO.API_STATUSES.REQUEST) {
      yield put(authActions.refreshTokenRequest());
      yield take(authTypes.REFRESH_TOKEN_SUCCESS);
      const queuedActions = yield select(coreSelectors.getQueuedActions);
      yield put(coreActions.queueActionSuccess());
      yield all(queuedActions.map(queuedAction => put(queuedAction)));
    }
  } catch (e) {
    console.log('err', e);
    yield put(coreActions.queueActionFailure());
    yield globalErrorCatcher(e);
  }
}

export default [
  takeLatest(coreTypes.INITIALIZE, initialize),
  takeLatest(coreTypes.QUEUE_ACTION, queueAction),
];
