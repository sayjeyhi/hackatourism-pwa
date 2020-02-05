import { createSelector } from 'reselect';
import createStatusSelector from '../loading/selectors';
import mapActions from './actions';

/**
 * Main selector : we can memoize this functions later
 */
const getMap = state => state.map;
const getReverseGeoCoder = createSelector(getMap, map => map.reverseGeoCoder);
const getSearchLocation = createSelector(getMap, map => map.searchLocation);

/**
 * Loading status maker
 * @type {function(*): *}
 */
const getGettingSearchLocationStatus = createStatusSelector(
  mapActions.searchLocationRequest(),
);
const getReverseGeoCoderStatus = createStatusSelector(
  mapActions.reverseGeoCoderRequest(),
);

/**
 * Main selectors
 */
export default {
  getLocations: createSelector(
    getSearchLocation,
    searchLocation => searchLocation.locations,
  ),
  getReversedAddress: createSelector(
    getReverseGeoCoder,
    reverseGeoCoder => reverseGeoCoder.address,
  ),
  getDefaultLocation: createSelector(getMap, map => map.defaultLocation),
  getReverseGeoCoderStatus,
  getGettingSearchLocationStatus,
};
