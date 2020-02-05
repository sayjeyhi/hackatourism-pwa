import { actionMaker } from '@snappmarket/helpers';
import mapTypes from './types';

export default {
  setDefaultLocation: payload =>
    actionMaker(mapTypes.SET_DEFAULT_LOCATION, payload),

  reverseGeoCoderRequest: payload =>
    actionMaker(mapTypes.REVERSE_GEO_CODER_REQUEST, payload),
  reverseGeoCoderSuccess: payload =>
    actionMaker(mapTypes.REVERSE_GEO_CODER_SUCCESS, payload),
  reverseGeoCoderFailure: payload =>
    actionMaker(mapTypes.REVERSE_GEO_CODER_FAILURE, payload),

  searchLocationRequest: payload =>
    actionMaker(mapTypes.SEARCH_LOCATION_REQUEST, payload),
  searchLocationSuccess: payload =>
    actionMaker(mapTypes.SEARCH_LOCATION_SUCCESS, payload),
  searchLocationFailure: payload =>
    actionMaker(mapTypes.SEARCH_LOCATION_FAILURE, payload),
};
