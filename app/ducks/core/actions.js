import { actionMaker } from '@snappmarket/helpers';
import coreTypes from './types';

export default {
  initialize: () => actionMaker(coreTypes.INITIALIZE),
  initializeFinished: () => actionMaker(coreTypes.INITIALIZE_FINISHED),

  queueAction: payload => actionMaker(coreTypes.QUEUE_ACTION, payload),
  queueActionSuccess: payload =>
    actionMaker(coreTypes.QUEUE_ACTION_SUCCESS, payload),
  queueActionFailure: payload =>
    actionMaker(coreTypes.QUEUE_ACTION_FAILURE, payload),

  purgeStorage: () => actionMaker(coreTypes.PURGE_STORAGE),
};
