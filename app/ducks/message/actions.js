import { actionMaker } from '@snappmarket/helpers';
import types from './types';

export default {
  showInfoToast: payload =>
    actionMaker(types.SHOW_TOAST, { type: 'info', ...payload }),
  showSuccessToast: payload =>
    actionMaker(types.SHOW_TOAST, { type: 'success', ...payload }),
  showErrorToast: payload =>
    actionMaker(types.SHOW_TOAST, { type: 'error', ...payload }),
  showWarningToast: payload =>
    actionMaker(types.SHOW_TOAST, { type: 'warning', ...payload }),

  showInfoAlert: payload =>
    actionMaker(types.SHOW_ALERT, { type: 'info', ...payload }),
  showSuccessAlert: payload =>
    actionMaker(types.SHOW_ALERT, { type: 'success', ...payload }),
  showErrorAlert: payload =>
    actionMaker(types.SHOW_ALERT, { type: 'error', ...payload }),
  showWarningAlert: payload =>
    actionMaker(types.SHOW_ALERT, { type: 'warning', ...payload }),

  /**
   * This methods will clear top toast messages of store
   * @returns {{payload, type}}
   */
  clearToast: () => actionMaker(types.CLEAR_TOAST),
  /**
   * Will clear a special alert from store
   * @param payload
   * @returns {{payload, type}}
   */
  clearAlert: payload => actionMaker(types.CLEAR_ALERT, payload),
};
