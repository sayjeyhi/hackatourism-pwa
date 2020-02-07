import { actionMaker } from '@snappmarket/helpers';
import userTypes from './types';

export default {
  appLoadRequest: payload => actionMaker(userTypes.APP_LOAD_REQUEST, payload),
  appLoadSuccess: payload => actionMaker(userTypes.APP_LOAD_SUCCESS, payload),
  appLoadFailure: payload => actionMaker(userTypes.APP_LOAD_FAILURE, payload),

  getProfileRequest: payload =>
    actionMaker(userTypes.GET_PROFILE_REQUEST, payload),
  getProfileSuccess: payload =>
    actionMaker(userTypes.GET_PROFILE_SUCCESS, payload),
  getProfileFailure: payload =>
    actionMaker(userTypes.GET_PROFILE_FAILURE, payload),

  getAddressesRequest: payload =>
    actionMaker(userTypes.GET_ADDRESSES_REQUEST, payload),
  getAddressesSuccess: payload =>
    actionMaker(userTypes.GET_ADDRESSES_SUCCESS, payload),
  getAddressesFailure: payload =>
    actionMaker(userTypes.GET_ADDRESSES_FAILURE, payload),

  deleteAddressRequest: payload =>
    actionMaker(userTypes.DELETE_ADDRESS_REQUEST, payload),
  deleteAddressSuccess: payload =>
    actionMaker(userTypes.DELETE_ADDRESS_SUCCESS, payload),
  deleteAddressFailure: payload =>
    actionMaker(userTypes.DELETE_ADDRESS_FAILURE, payload),

  editAddressRequest: payload =>
    actionMaker(userTypes.EDIT_ADDRESS_REQUEST, payload),
  editAddressSuccess: payload =>
    actionMaker(userTypes.EDIT_ADDRESS_SUCCESS, payload),
  editAddressFailure: payload =>
    actionMaker(userTypes.EDIT_ADDRESS_FAILURE, payload),

  addAddressRequest: payload =>
    actionMaker(userTypes.ADD_ADDRESS_REQUEST, payload),
  addAddressSuccess: payload =>
    actionMaker(userTypes.ADD_ADDRESS_SUCCESS, payload),
  addAddressFailure: payload =>
    actionMaker(userTypes.ADD_ADDRESS_FAILURE, payload),

  setSelectedAddress: payload =>
    actionMaker(userTypes.SET_SELECTED_ADDRESS, payload),
  setIsLoggedIn: payload => actionMaker(userTypes.SET_LOGGED_IN, payload),

  clearUserData: () => actionMaker(userTypes.CLEAR_USER_DATA),
};
