import { call, takeLatest, select, put } from 'redux-saga/effects';

import {
  globalErrorCatcher,
  safeObjectPropertyRead,
} from '@snappmarket/helpers';
import apiMessages from 'constants/Messages/api.messages';
import APP_INFO from 'constants/appInfo';

import { mapTypes, mapActions, mapServices, mapUtils, userSelectors } from '..';

export function* reverseGeoCoder(action) {
  try {
    const mapType = yield select(userSelectors.getMapType);
    const { reverseGeo } = mapType;
    switch (APP_INFO.MAP_TYPES[reverseGeo]) {
      case APP_INFO.MAP_TYPES.CEDAR_MAP:
        yield* cedarReverseGeoCoder(action);
        break;
      case APP_INFO.MAP_TYPES.MAP_IR:
        yield* mapIrReverseGeoCoder(action);
        break;
      default:
        yield* smappReverseGeoCoder(action);
        break;
    }
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.reverseGeoCoderFailure(
        safeObjectPropertyRead(
          e,
          'response.message',
          apiMessages.promiseFailed,
        ),
      ),
    );
  }
}

export function* searchLocation(action) {
  try {
    const mapType = yield select(userSelectors.getMapType);

    const { search } = mapType;
    switch (APP_INFO.MAP_TYPES[search]) {
      case APP_INFO.MAP_TYPES.CEDAR_MAP:
        yield* cedarSearchLocation(action);
        break;
      case APP_INFO.MAP_TYPES.MAP_IR:
        yield* mapIrSearchLocation(action);
        break;
      default:
        yield* smappSearchLocation(action);
        break;
    }
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.searchLocationFailure(
        safeObjectPropertyRead(
          e,
          'response.message',
          apiMessages.promiseFailed,
        ),
      ),
    );
  }
}

export function* mapIrReverseGeoCoder(action) {
  const {
    payload: { lat, lng },
  } = action;
  try {
    const response = yield call(mapServices.mapIrReverseGeoCoder, { lat, lng });
    const { address } = response;
    yield put(mapActions.reverseGeoCoderSuccess(address));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.reverseGeoCoderFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}

export function* mapIrSearchLocation(action) {
  const {
    payload: { searchQuery: text, type, lat, lng },
  } = action;
  try {
    const response = yield call(mapServices.mapIrSearchLocation, {
      text,
      type,
      lat,
      lng,
    });
    const { value } = response;
    const locations = mapUtils.normalizeMapIrSearchResult(value);

    yield put(mapActions.searchLocationSuccess(locations));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.searchLocationFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}

export function* smappReverseGeoCoder(action) {
  const {
    payload: { lat, lng, display = true },
  } = action;
  try {
    const response = yield call(mapServices.smappReverseGeoCoder, {
      lat,
      lng,
      display,
    });
    const {
      result: { displayName: address },
    } = response;

    yield put(mapActions.reverseGeoCoderSuccess(address));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.reverseGeoCoderFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}
export function* smappSearchLocation(action) {
  const {
    payload: { searchQuery: text, type, lat, lng },
  } = action;
  try {
    const response = yield call(mapServices.smappSearchLocation, {
      text,
      type,
      lat,
      lng,
    });
    const { predictions } = response;
    const locations = mapUtils.normalizeSmappSearchResult(predictions);
    yield put(mapActions.searchLocationSuccess(locations));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.searchLocationFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}
export function* cedarReverseGeoCoder(action) {
  const {
    payload: { lat, lng },
  } = action;
  try {
    const response = yield call(mapServices.cedarMapReverseGeoCoder, {
      lat,
      lng,
    });
    const {
      result: { address, locality, place },
    } = response;

    yield put(mapActions.reverseGeoCoderSuccess(address || locality || place));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.reverseGeoCoderFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}
export function* cedarSearchLocation(action) {
  const {
    payload: { searchQuery: text, type, lat, lng, distance = 30 },
  } = action;
  try {
    const response = yield call(mapServices.cedarMapSearchLocation, {
      text,
      type,
      lat,
      lng,
      distance,
    });
    const { results } = response;
    const locations = mapUtils.normalizeCedarMapSearchResult(results);

    yield put(mapActions.searchLocationSuccess(locations));
  } catch (e) {
    yield globalErrorCatcher(e);
    yield put(
      mapActions.searchLocationFailure(
        safeObjectPropertyRead(e, 'response.message', ''),
      ),
    );
  }
}

export default [
  takeLatest(mapTypes.REVERSE_GEO_CODER_REQUEST, reverseGeoCoder),
  takeLatest(mapTypes.SEARCH_LOCATION_REQUEST, searchLocation),
];
