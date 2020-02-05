import { createSelector } from 'reselect';

/**
 * Main selector : we can memoize this functions later
 */
const getAuth = state => state.auth;

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
};
