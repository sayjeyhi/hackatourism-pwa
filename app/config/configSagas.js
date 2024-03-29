import { all } from 'redux-saga/effects';

import authSaga from 'ducks/auth/sagas';
import coreSagas from 'ducks/core/sagas';
import userSagas from 'ducks/user/sagas';
import mapSagas from 'ducks/map/sagas';
import ticketSaga from 'ducks/ticket/sagas';
import weatherSagas from 'ducks/weather/sagas';
import aiSagas from 'ducks/ai/sagas';
import adviserSagas from 'ducks/adviser/sagas';
import citiesSagas from 'ducks/cities/sagas';

export default function* configSagas() {
  yield all([...authSaga]);
  yield all([...coreSagas]);
  yield all([...userSagas]);
  yield all([...ticketSaga]);
  yield all([...mapSagas]);
  yield all([...weatherSagas]);
  yield all([...aiSagas]);
  yield all([...adviserSagas]);
  yield all([...citiesSagas]);
}
