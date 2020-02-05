import { createSelector } from 'reselect';
import userActions from './actions';
import createStatusSelector from '../loading/selectors';

/**
 * Main selector : we can memoize this functions later
 */
const getUser = state => state.user;

/**
 * Loading status maker
 * @type {function(*): *}
 */
const getDeleteAddressStatus = createStatusSelector(
  userActions.deleteAddressRequest(),
);
const getEditAddressStatus = createStatusSelector(
  userActions.editAddressRequest(),
);
const getAddAddressStatus = createStatusSelector(
  userActions.addAddressRequest(),
);
const getGetAddressStatus = createStatusSelector(
  userActions.getAddressesRequest(),
);

export default {
  getLoggedInStatus: createSelector(getUser, user => user.isUserLoggedIn),
  getProfile: createSelector(getUser, user => user.profile),
  getAddresses: createSelector(getUser, user => user.addresses),
  getSelectedAddress: createSelector(getUser, user => user.selectedAddress),
  getCredit: createSelector(getUser, user => user.profile.credit),
  getMapType: createSelector(getUser, user => user.mapType),
  getExperiments: createSelector(getUser, user => user.experiments),
  getGetAddressStatus,
  getDeleteAddressStatus,
  getEditAddressStatus,
  getAddAddressStatus,
};
