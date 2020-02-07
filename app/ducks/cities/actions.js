import { actionMaker } from '@snappmarket/helpers';
import types from './types';

export default {
  getCitiesRequest: payload =>
    actionMaker(types.GET_CITIES_LIST_FAILURE, payload),
  getCitiesSuccess: payload =>
    actionMaker(types.GET_CITIES_LIST_FAILURE, payload),
  getCitiesFailure: payload =>
    actionMaker(types.GET_CITIES_LIST_FAILURE, payload),

  getProvincesRequest: payload => actionMaker(types.GET_PROVINCES_LIST_REQUEST, payload),
  getProvincesSuccess: payload =>
    actionMaker(types.GET_PROVINCES_LIST_SUCCESS, payload),
  getProvincesFailure: payload =>
    actionMaker(types.GET_PROVINCES_LIST_FAILURE, payload),
};
