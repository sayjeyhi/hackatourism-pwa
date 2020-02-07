import { actionMaker } from '@snappmarket/helpers';
import types from './types';

export default {
  getAdvisersList: payload =>
    actionMaker(types.GET_ADVISERS_LIST_REQUEST, payload),
  getAdvisersListSuccess: payload =>
    actionMaker(types.GET_ADVISERS_LIST_SUCCESS, payload),
  getAdvisersListFailure: payload =>
    actionMaker(types.GET_ADVISERS_LIST_FAILURE, payload),

  makeVoipCall: payload => actionMaker(types.MAKE_VOIP_CALL_REQUEST, payload),
  makeVoipCallSuccess: payload =>
    actionMaker(types.MAKE_VOIP_CALL_SUCCESS, payload),
  makeVoipCallFailure: payload =>
    actionMaker(types.MAKE_VOIP_CALL_FAILURE, payload),
};
