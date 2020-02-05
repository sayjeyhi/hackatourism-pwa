import { takeLatest, call, put, select, take } from 'redux-saga/effects';
import globalMessages from 'constants/Messages/general.messages';

import {
  safeObjectPropertyRead,
  globalErrorCatcher,
} from '@snappmarket/helpers';

import {
  userTypes,
  userServices,
  userActions,
  userSelectors,
  mapActions,
} from '..';

function* appLoadRequest(action) {
  try {
    const response = yield call(userServices.load, { ...action.payload });
    const { data } = response;
    yield put(userActions.appLoadSuccess(data));
    const { isUserLoggedIn, defaultLocation } = data;
    if (isUserLoggedIn) {
      yield put(userActions.getProfileRequest());
    }

    const {
      setByUser,
      lat: currentLat,
      lng: currentLng,
      address,
      ...rest
    } = yield select(userSelectors.getSelectedAddress);
    const { lat, long: lng } = defaultLocation;
    yield put(
      userActions.setSelectedAddress({
        ...rest,
        lat: setByUser ? currentLat : lat,
        lng: setByUser ? currentLng : lng,
        address: setByUser ? address : globalMessages.nearYou,
        setByUser,
      }),
    );

    // set default location info on map state
    yield put(
      mapActions.setDefaultLocation({
        lat: data.defaultLocation.lat,
        lng: data.defaultLocation.long,
      }),
    );
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      userActions.appLoadFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}

function* getProfileRequest() {
  try {
    const response = yield call(userServices.getProfile);
    const { data } = response;
    const {
      user: { hash },
    } = data;

    // const { lat, lng: lon } = yield select(userSelectors.getSelectedAddress);
    const { lat, lng } = yield select(userSelectors.getSelectedAddress);
    yield put(
      userActions.getAddressesRequest({
        lat,
        lng,
        hash,
      }),
    );

    yield put(userActions.getProfileSuccess(data));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      userActions.getProfileFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}

function* getAddressesRequest(action) {
  const {
    payload: { lat, lng: lon },
  } = action;

  // wait till user info grab
  yield take(userTypes.GET_PROFILE_SUCCESS);

  try {
    const { hash } = yield select(userSelectors.getProfile);
    const response = yield call(userServices.getAddresses, {
      hash,
      lat,
      lon,
    });
    const { items: addresses } = response;
    yield put(userActions.getAddressesSuccess(addresses));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      userActions.getAddressesFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}

function* deleteAddressRequest(action) {
  const { payload } = action;
  try {
    const response = yield call(userServices.deleteAddress, payload);
    console.log('deleteAddressRequest', response);

    const { data } = response;
    yield put(userActions.deleteAddressSuccess(data));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      userActions.deleteAddressFailure(
        safeObjectPropertyRead(e, 'response.data', {}),
      ),
    );
  }
}

function* editAddressRequest(action) {
  const {
    payload: { ...rest },
  } = action;
  try {
    const response = yield call(userServices.editAddress, { ...rest });
    const { data } = response;
    yield put(userActions.editAddressSuccess(data));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      userActions.editAddressFailure(
        safeObjectPropertyRead(e, 'response.data', {}),
      ),
    );
  }
}

function* addAddressRequest(action) {
  const {
    payload: { ...rest },
  } = action;
  try {
    const response = yield call(userServices.addAddress, { ...rest });
    console.log('addAddressRequest', response);
    const { data } = response;
    yield put(userActions.addAddressSuccess(data));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      userActions.addAddressFailure(
        safeObjectPropertyRead(e, 'response.data', {}),
      ),
    );
  }
}

export default [
  takeLatest(userTypes.APP_LOAD_REQUEST, appLoadRequest),
  takeLatest(userTypes.GET_PROFILE_REQUEST, getProfileRequest),
  takeLatest(userTypes.GET_ADDRESSES_REQUEST, getAddressesRequest),
  takeLatest(userTypes.DELETE_ADDRESS_REQUEST, deleteAddressRequest),
  takeLatest(userTypes.EDIT_ADDRESS_REQUEST, editAddressRequest),
  takeLatest(userTypes.ADD_ADDRESS_REQUEST, addAddressRequest),
];
