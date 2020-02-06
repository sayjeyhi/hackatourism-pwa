import { takeLatest, call, put } from 'redux-saga/effects';
import {
  globalErrorCatcher,
  safeObjectPropertyRead,
} from '@snappmarket/helpers';

import { aiActions, aiServices, aiTypes } from '..';

function* getCitiesPath(action) {
  try {
    const response = yield call(aiServices.getCitiesPath, action.payload);

    yield put(aiActions.getCitiesPathSuccess(response));

    console.log({ response });
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      aiActions.getCitiesPathFailure(safeObjectPropertyRead(e, 'message', '')),
    );
  }
}

export default [takeLatest(aiTypes.GET_CITIES_PATH_REQUEST, getCitiesPath)];
