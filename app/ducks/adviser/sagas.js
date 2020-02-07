import { takeLatest, call, put } from 'redux-saga/effects';
import {
  globalErrorCatcher,
  safeObjectPropertyRead,
} from '@snappmarket/helpers';

import { adviserActions, adviserServices, adviserTypes } from '..';

function* getAdvisersList(action) {
  try {
    const response = yield call(adviserServices.getAdvisers, action.payload);

    yield put(adviserActions.getAdvisersListSuccess(response));

    console.log({ response });
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      adviserActions.getAdvisersListFailure(
        safeObjectPropertyRead(e, 'message', ''),
      ),
    );
  }
}

function* makeVoipCall(action) {
  try {
    const response = yield call(adviserServices.doVoipCall, action.payload);

    yield put(adviserActions.makeVoipCallSuccess(response));

    console.log({ response });
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      adviserActions.makeVoipCallFailure(
        safeObjectPropertyRead(e, 'message', ''),
      ),
    );
  }
}

export default [
  takeLatest(adviserTypes.GET_ADVISERS_LIST_REQUEST, getAdvisersList),
  takeLatest(adviserTypes.MAKE_VOIP_CALL_REQUEST, getAdvisersList),
];
