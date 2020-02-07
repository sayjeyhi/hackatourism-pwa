import { takeLatest, call, put } from 'redux-saga/effects';
import {
  globalErrorCatcher,
  safeObjectPropertyRead,
} from '@snappmarket/helpers';

import { citiesActions, citiesServices, citiesTypes } from '..';

function* getCitiesRequest(action) {
  try {
    const response = yield call(citiesServices.getAdvisers, action.payload);

    yield put(citiesActions.getAdvisersListSuccess(response));

    console.log({ response });
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      citiesActions.getAdvisersListFailure(
        safeObjectPropertyRead(e, 'message', ''),
      ),
    );
  }
}

function* makeVoipCall(action) {
  try {
    const response = yield call(citiesServices.doVoipCall, action.payload);

    yield put(citiesActions.makeVoipCallSuccess(response));

    console.log({ response });
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      citiesActions.makeVoipCallFailure(
        safeObjectPropertyRead(e, 'message', ''),
      ),
    );
  }
}

export default [
  takeLatest(citiesTypes.GET_CITIES_LIST_REQUEST, getAdvisersList),
  takeLatest(citiesTypes.GET_PROVINCES_LIST_REQUEST, getAdvisersList),
];
