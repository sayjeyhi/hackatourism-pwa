import { actionMaker } from '@snappmarket/helpers';
import aiTypes from './types';

export default {
  getCitiesPath: payload =>
    actionMaker(aiTypes.GET_CITIES_PATH_REQUEST, payload),
  getCitiesPathSuccess: payload =>
    actionMaker(aiTypes.GET_CITIES_PATH_SUCCESS, payload),
  getCitiesPathFailure: payload =>
    actionMaker(aiTypes.GET_CITIES_PATH_FAILURE, payload),

  getAirlinesPath: payload =>
    actionMaker(aiTypes.GET_AIRLINES_PATH_REQUEST, payload),
  getAirlinesPathSuccess: payload =>
    actionMaker(aiTypes.GET_AIRLINES_PATH_SUCCESS, payload),
  getAirlinesPathFailure: payload =>
    actionMaker(aiTypes.GET_AIRLINES_PATH_FAILURE, payload),
};
