import { actionMaker } from '@snappmarket/helpers';
import authTypes from './types';

export default {
  showAuthModal: () => actionMaker(authTypes.SHOW_AUTH_MODAL),
  hideAuthModal: () => actionMaker(authTypes.HIDE_AUTH_MODAL),
  setForceAuthModal: payload =>
    actionMaker(authTypes.SET_FORCE_AUTH_MODAL, payload),

  loginWithNoPassRequest: payload =>
    actionMaker(authTypes.LOGIN_WITH_NO_PASS_REQUEST, payload),
  loginWithNoPassSuccess: payload =>
    actionMaker(authTypes.LOGIN_WITH_NO_PASS_SUCCESS, payload),
  loginWithNoPassFailure: payload =>
    actionMaker(authTypes.LOGIN_WITH_NO_PASS_FAILURE, payload),

  loginMobileWithTokenRequest: payload =>
    actionMaker(authTypes.LOGIN_MOBILE_WITH_TOKEN_REQUEST, payload),
  loginMobileWithTokenSuccess: payload =>
    actionMaker(authTypes.LOGIN_MOBILE_WITH_TOKEN_SUCCESS, payload),
  loginMobileWithTokenFailure: payload =>
    actionMaker(authTypes.LOGIN_MOBILE_WITH_TOKEN_FAILURE, payload),

  registerWithOptionalPassRequest: payload =>
    actionMaker(authTypes.REGISTER_WITH_OPTIONAL_PASS_REQUEST, payload),
  registerWithOptionalPassSuccess: payload =>
    actionMaker(authTypes.REGISTER_WITH_OPTIONAL_PASS_SUCCESS, payload),
  registerWithOptionalPassFailure: payload =>
    actionMaker(authTypes.REGISTER_WITH_OPTIONAL_PASS_FAILURE, payload),

  logoutRequest: payload => actionMaker(authTypes.LOGOUT_REQUEST, payload),
  logoutSuccess: payload => actionMaker(authTypes.LOGOUT_SUCCESS, payload),
  logoutFailure: payload => actionMaker(authTypes.LOGOUT_FAILURE, payload),

  refreshTokenRequest: () => actionMaker(authTypes.REFRESH_TOKEN_REQUEST),
  refreshTokenSuccess: payload =>
    actionMaker(authTypes.REFRESH_TOKEN_SUCCESS, payload),
  refreshTokenFailure: payload =>
    actionMaker(authTypes.REFRESH_TOKEN_FAILURE, payload),
};
