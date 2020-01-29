import MAP_INFO from 'constants/mapSettings';
import mapTypes from './types';

const initialState = {
  defaultLocation: {
    lat: MAP_INFO.defaultLocation.lat,
    lng: MAP_INFO.defaultLocation.lng,
  },
  reverseGeoCoder: {
    address: '',
    message: '',
  },
  searchLocation: {
    locations: [],
    message: '',
  },
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case mapTypes.SET_DEFAULT_LOCATION:
      return {
        ...state,
        defaultLocation: {
          lat: parseFloat(action.payload.lat),
          lng: parseFloat(action.payload.lng),
        },
      };
    case mapTypes.REVERSE_GEO_CODER_REQUEST:
      return {
        ...state,
        reverseGeoCoder: {
          address: '',
          message: '',
        },
      };
    case mapTypes.REVERSE_GEO_CODER_FAILURE:
      return {
        ...state,
        reverseGeoCoder: {
          address: '',
          message: action.payload,
        },
      };
    case mapTypes.REVERSE_GEO_CODER_SUCCESS:
      return {
        ...state,
        reverseGeoCoder: {
          address: action.payload,
          message: '',
        },
      };

    case mapTypes.SEARCH_LOCATION_REQUEST:
      return {
        ...state,
        searchLocation: {
          locations: [],
          message: '',
        },
      };
    case mapTypes.SEARCH_LOCATION_FAILURE:
      return {
        ...state,
        searchLocation: {
          locations: [],
          message: action.payload,
        },
      };
    case mapTypes.SEARCH_LOCATION_SUCCESS:
      return {
        ...state,
        searchLocation: {
          locations: action.payload,
          message: '',
        },
      };
    default:
      return state;
  }
};

export default mapReducer;
