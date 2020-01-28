import { actionMaker } from '@snappmarket/helpers';
import logTypes from './types';

export default {
  writeLog: payload => actionMaker(logTypes.WRITE_LOG, payload),
  appendLog: payload => actionMaker(logTypes.APPEND_LOG, payload),

  sendLogSuccess: payload => actionMaker(logTypes.SEND_LOG_SUCCESS, payload),
  sendLogFailure: payload => actionMaker(logTypes.SEND_LOG_FAILURE, payload),

  getIpRequest: payload => actionMaker(logTypes.GET_IP_REQUEST, payload),
  getIpSuccess: payload => actionMaker(logTypes.GET_IP_SUCCESS, payload),
  getIpFailure: payload => actionMaker(logTypes.GET_IP_FAILURE, payload),
};
