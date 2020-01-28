import { all } from 'redux-saga/effects';
import authSaga from '../ducks/auth/sagas';
import coreSagas from '../ducks/core/sagas';
import userSagas from '../ducks/user/sagas';
import logSagas from '../ducks/log/sagas';
import mapSagas from '../ducks/map/sagas';
import productSaga from '../ducks/products/sagas';

export default function* rootSaga() {
  yield all([...authSaga]);
  yield all([...coreSagas]);
  yield all([...userSagas]);
  yield all([...logSagas]);
  yield all([...mapSagas]);
  yield all([...productSaga]);
}
