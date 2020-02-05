import { actionMaker } from '@snappmarket/helpers';
import authTypes from './types';

export default {
  showAuthModal: () => actionMaker(authTypes.SHOW_AUTH_MODAL),
  hideAuthModal: () => actionMaker(authTypes.HIDE_AUTH_MODAL),
  setForceAuthModal: payload =>
    actionMaker(authTypes.SET_FORCE_AUTH_MODAL, payload),

  loginRequest: payload => actionMaker(authTypes.LOGIN_REQUEST, payload),
  loginSuccess: payload => actionMaker(authTypes.LOGIN_SUCCESS, payload),
  loginFailure: payload => actionMaker(authTypes.LOGIN_FAILURE, payload),

  loginMobileWithTokenRequest: payload =>
    actionMaker(authTypes.LOGIN_MOBILE_WITH_TOKEN_REQUEST, payload),
  loginMobileWithTokenSuccess: payload =>
    actionMaker(authTypes.LOGIN_MOBILE_WITH_TOKEN_SUCCESS, payload),
  loginMobileWithTokenFailure: payload =>
    actionMaker(authTypes.LOGIN_MOBILE_WITH_TOKEN_FAILURE, payload),

  registerRequest: payload => actionMaker(authTypes.REGISTER_REQUEST, payload),
  registerSuccess: payload => actionMaker(authTypes.REGISTER_SUCCESS, payload),
  registerFailure: payload => actionMaker(authTypes.REGISTER_FAILURE, payload),

  logoutRequest: payload => actionMaker(authTypes.LOGOUT_REQUEST, payload),
  logoutSuccess: payload => actionMaker(authTypes.LOGOUT_SUCCESS, payload),
  logoutFailure: payload => actionMaker(authTypes.LOGOUT_FAILURE, payload),
};
