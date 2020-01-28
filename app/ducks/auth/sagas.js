import { takeLatest, call, put } from 'redux-saga/effects';
import {
  globalErrorCatcher,
  safeObjectPropertyRead,
} from '@snappmarket/helpers';

import APP_INFO from 'constants/appInfo';
import {
  getCookie,
  deleteCookie,
} from 'constants/ServerWrappers/cookieHelperWrapper';
import { setJwtToken } from 'constants/Helpers/jwtHelpers';
import {
  authActions,
  authServices,
  authTypes,
  coreActions,
  userActions,
} from '..';

import { writeLog } from '../log/sagas';

function* loginWithNoPassRequest(action) {
  const {
    payload: { cellphone, resend },
  } = action;

  yield* writeLog({
    payload: {
      medium: 'login_modal',
      action: 'submit',
      details: resend ? 'resendVerificationCode' : 'sendPhone',
    },
  });

  try {
    const response = yield call(authServices.loginMobileWithNoPass, {
      cellphone,
    });

    const {
      status,
      data: {
        result: { hasPassword, isRegistered },
      },
    } = response;

    if (status) {
      // if user has password that mean previous method will not send message to him and we should call another one
      if (hasPassword) {
        const sendLoginToken = yield call(authServices.sendLoginToken, {
          cellphone,
        });
        const { loginTokenStatus } = sendLoginToken;
        if (loginTokenStatus) {
          yield put(authActions.loginWithNoPassSuccess({ isRegistered }));
        } else {
          throw new Error('loginWithNoPass Failure');
        }
      } else {
        yield put(authActions.loginWithNoPassSuccess({ isRegistered }));
      }
      // end user with password logic
    } else {
      throw new Error('loginWithNoPass Failure');
    }
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      authActions.loginWithNoPassFailure(
        safeObjectPropertyRead(e, 'message', ''),
      ),
    );
  }
}

function* loginMobileWithToken(action) {
  const {
    payload: { cellphone, code, client, deviceType, appVersion },
  } = action;

  yield* writeLog({
    payload: {
      medium: 'login_modal',
      action: 'submit',
      details: 'sendVerification',
    },
  });

  try {
    const response = yield call(authServices.loginMobileWithToken, {
      cellphone,
      code,
      client,
      deviceType,
      appVersion,
    });

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

function* registerWithOptionalPass(action) {
  const {
    payload: {
      code,
      cellphone,
      email,
      firstname,
      lastname,
      client,
      deviceType,
      appVersion,
    },
  } = action;

  yield* writeLog({
    payload: {
      medium: 'login_modal',
      action: 'submit',
      details: 'signUp',
    },
  });

  try {
    const response = yield call(authServices.registerWithOptionalPass, {
      code,
      cellphone,
      email,
      firstname,
      lastname,
      client,
      deviceType,
      appVersion,
    });

    const {
      data: { jwt_token: jwtToken, jwt_refresh_token: jwtRefreshToken },
    } = response;
    yield call(setJwtToken, jwtToken, jwtRefreshToken);
    yield put(userActions.getProfileRequest());
    yield put(authActions.registerWithOptionalPassSuccess());
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      authActions.registerWithOptionalPassFailure(
        safeObjectPropertyRead(e, 'message', ''),
      ),
    );
  }
}
function* refreshTokenRequest() {
  try {
    const response = yield call(authServices.refreshToken, {
      refreshToken: getCookie('jwtRefreshToken'),
    });
    const {
      data: { token: jwtToken, refresh_token: jwtRefreshToken },
    } = response;

    yield call(setJwtToken, jwtToken, jwtRefreshToken);
    yield put(authActions.refreshTokenSuccess());
  } catch (e) {
    console.log('err', e);
    yield globalErrorCatcher(e);
    yield put(
      // @todo: kick user
      authActions.refreshTokenFailure(safeObjectPropertyRead(e, 'message', '')),
    );
  }
}

function* logoutRequest() {
  try {
    yield call(authServices.logout);
    yield put(basketActions.clearBasket());
    yield put(userActions.clearUserData());
    yield put(orderActions.clearOrderTemp());
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
  takeLatest(authTypes.LOGIN_WITH_NO_PASS_REQUEST, loginWithNoPassRequest),
  takeLatest(authTypes.LOGIN_MOBILE_WITH_TOKEN_REQUEST, loginMobileWithToken),
  takeLatest(
    authTypes.REGISTER_WITH_OPTIONAL_PASS_REQUEST,
    registerWithOptionalPass,
  ),
  takeLatest(authTypes.LOGOUT_REQUEST, logoutRequest),
  takeLatest(authTypes.REFRESH_TOKEN_REQUEST, refreshTokenRequest),
];
