import { takeLatest, call, put } from 'redux-saga/effects';
import {
  globalErrorCatcher,
  safeObjectPropertyRead,
} from '@snappmarket/helpers';

import APP_INFO from 'constants/appInfo';
import { deleteCookie } from 'constants/ServerWrappers/cookieHelperWrapper';
import { setJwtToken } from 'constants/Helpers/jwtHelpers';
import {
  authActions,
  authServices,
  authTypes,
  coreActions,
  userActions,
} from '..';

function* loginRequest(action) {
  try {
    const response = yield call(authServices.login, action.payload);

    yield put(authActions.logoutSuccess(response));

    console.log({ response });
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      authActions.loginFailure(safeObjectPropertyRead(e, 'message', '')),
    );
  }
}

function* loginMobileWithToken(action) {
  try {
    const response = yield call(
      authServices.loginMobileWithToken,
      action.payload,
    );

    // eslint-disable-next-line no-console
    const {
      data: { jwt_token: jwtToken, jwt_refresh_token: jwtRefreshToken },
    } = response;
    yield call(setJwtToken, jwtToken, jwtRefreshToken);
    yield put(userActions.getProfileRequest());
    yield put(authActions.loginMobileWithTokenSuccess());
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      authActions.loginMobileWithTokenFailure(
        safeObjectPropertyRead(e, 'message', ''),
      ),
    );
  }
}

function* registerRequest(action) {
  try {
    const response = yield call(
      authServices.registerWithOptionalPass,
      action.payload,
    );

    yield put(authActions.registerSuccess(response));
    // const {
    //   data: { jwt_token: jwtToken, jwt_refresh_token: jwtRefreshToken },
    // } = response;
    // yield call(setJwtToken, jwtToken, jwtRefreshToken);
    // yield put(userActions.getProfileRequest());
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      authActions.registerFailure(safeObjectPropertyRead(e, 'message', '')),
    );
  }
}

function* logoutRequest() {
  try {
    yield call(authServices.logout);
    yield put(userActions.clearUserData());
    yield put(coreActions.purgeStorage());
    yield put(authActions.logoutSuccess());
    yield call(deleteCookie, 'jwtToken');
    yield call(deleteCookie, 'jwtRefreshToken');
    APP_INFO.JWT_TOKEN = null;
    // window.location.reload();
  } catch (e) {
    console.log('err', e);
    yield globalErrorCatcher(e);
    yield put(authActions.logoutFailure());
  }
}

export default [
  takeLatest(authTypes.LOGIN_REQUEST, loginRequest),
  takeLatest(authTypes.LOGIN_MOBILE_WITH_TOKEN_REQUEST, loginMobileWithToken),
  takeLatest(authTypes.REGISTER_REQUEST, registerRequest),
  takeLatest(authTypes.LOGOUT_REQUEST, logoutRequest),
];
