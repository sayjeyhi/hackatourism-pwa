import userTypes from './types';
import userUtils from './utils';

const initialState = {
  profile: {
    id: null,
    username: '',
    firstname: '',
    lastname: '',
    cellphone: '',
    email: '',
    credit: 0,
    hash: null,
  },
  addresses: [],
  selectedAddress: {
    lat: 0,
    lng: 0,
    title: '',
    address: '',
    setByUser: false,
  },
  token: null,
  refreshToken: null,
  isUserLoggedIn: false,
  mapType: {},
  experiments: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.APP_LOAD_REQUEST:
      return {
        ...state,
      };
    case userTypes.APP_LOAD_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { isUserLoggedIn, mapType, experiments } = action.payload;
      return {
        ...state,
        isUserLoggedIn,
        mapType,
        experiments,
      };
    case userTypes.APP_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case userTypes.GET_ADDRESSES_REQUEST:
    case userTypes.GET_ADDRESSES_FAILURE:
      return {
        ...state,
        addresses: [],
      };
    case userTypes.GET_ADDRESSES_SUCCESS:
      return {
        ...state,
        addresses: action.payload,
      };

    //  DELETE ADDRESS
    case userTypes.DELETE_ADDRESS_REQUEST:
    case userTypes.DELETE_ADDRESS_SUCCESS:
    case userTypes.DELETE_ADDRESS_FAILURE:
      return {
        ...state,
      };
    //  EDIT ADDRESS
    case userTypes.EDIT_ADDRESS_REQUEST:
      return {
        ...state,
        addresses: [],
      };
    case userTypes.EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
      };
    case userTypes.EDIT_ADDRESS_FAILURE:
      return {
        ...state,
      };
    //  ADD ADDRESS
    case userTypes.ADD_ADDRESS_REQUEST:
      return {
        ...state,
        addresses: [],
      };
    case userTypes.ADD_ADDRESS_SUCCESS:
    case userTypes.ADD_ADDRESS_FAILURE:
      return {
        ...state,
      };

    case userTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        profile: {},
      };
    case userTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: userUtils.normalizeProfile(action.payload.user),
        isUserLoggedIn: true,
      };

    case userTypes.SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload,
      };
    case userTypes.CLEAR_USER_DATA:
      return initialState;
    default:
      return state;
  }
  // console.log({action} );
};

export default userReducer;
