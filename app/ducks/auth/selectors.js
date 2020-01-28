import { createSelector } from 'reselect';
import authActions from './actions';
import createStatusSelector from '../loading/selectors';

/**
 * Main selector : we can memoize this functions later
 */
const getAuth = state => state.auth;

/**
 * Loading status maker
 */
const getLoginWithNoPassStatus = createStatusSelector(
  authActions.loginWithNoPassRequest(),
);
const getLoginMobileWithTokenStatus = createStatusSelector(
  authActions.loginMobileWithTokenRequest(),
);
const getRegisterWithOptionalPassStatus = createStatusSelector(
  authActions.registerWithOptionalPassRequest(),
);
const getRefreshTokenRequestStatus = createStatusSelector(
  authActions.refreshTokenRequest(),
);

export default {
  getIsRegistered: createSelector(getAuth, auth => auth.isRegistered),
  getAuthModalVisibility: createSelector(
    getAuth,
    auth => auth.authModalVisibility,
  ),
  getForceAuthModalVisibility: createSelector(
    getAuth,
    auth => auth.forceAuthModalVisibility,
  ),
  getLoginWithNoPassStatus,
  getLoginMobileWithTokenStatus,
  getRegisterWithOptionalPassStatus,
  getRefreshTokenRequestStatus,
};
