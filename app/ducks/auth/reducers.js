import authTypes from './types';

const initialState = {
  authModalVisibility: false,
  forceAuthModalVisibility: false,
  isRegistered: true,
  login: {
    status: false,
  },
  register: {
    status: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SHOW_AUTH_MODAL:
      return {
        ...state,
        authModalVisibility: true,
      };
    case authTypes.HIDE_AUTH_MODAL:
      return {
        ...state,
        authModalVisibility: false,
      };
    case authTypes.SET_FORCE_AUTH_MODAL:
      return {
        ...state,
        forceAuthModalVisibility: action.payload,
      };
    // will get user login message code
    case authTypes.LOGIN_WITH_NO_PASS_REQUEST:
    case authTypes.LOGIN_WITH_NO_PASS_FAILURE:
      return {
        ...state,
        isRegistered: false,
      };
    case authTypes.LOGIN_WITH_NO_PASS_SUCCESS:
      return {
        ...state,
        isRegistered: action.payload.isRegistered,
      };

    // send token to login
    case authTypes.LOGIN_MOBILE_WITH_TOKEN_REQUEST:
    case authTypes.LOGIN_MOBILE_WITH_TOKEN_FAILURE:
      return {
        ...state,
        login: {},
      };
    case authTypes.LOGIN_MOBILE_WITH_TOKEN_SUCCESS:
      return {
        ...state,
        login: action.payload,
      };

    // to submit user register with code
    case authTypes.REGISTER_WITH_OPTIONAL_PASS_REQUEST:
    case authTypes.REGISTER_WITH_OPTIONAL_PASS_FAILURE:
      return {
        ...state,
        register: {},
      };
    case authTypes.REGISTER_WITH_OPTIONAL_PASS_SUCCESS:
      return {
        ...state,
        register: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
