import Map from './map';

const baseApi = process.env.API_URL;

const api = {
  api: `${baseApi}/mart/v1`,
};

const endpoints = {
  AUTH: {
    LOGIN_MOBILE_WITH_TOKEN: () => `${api.martV1}/user/loginMobileWithToken`,
    LOGIN_MOBILE_WITH_NO_PASS: () => `${api.martV1}/user/loginMobileWithNoPass`,
    SEND_LOGIN_TOKEN: () => `${api.martV1}/user/sendLoginToken`,
    REGISTER_WITH_OPTIONAL_PASS: () =>
      `${api.martV1}/user/registerWithOptionalPass`,
    REFRESH_TOKEN: () => `${api.martV1}/token/refresh`,
    LOGOUT: () => `${api.martV1}/user/logout`,
  },
  USER: {
    PROFILE: () => `${api.martV1}/user/profile`,
    ADDRESSES: ({ hash }) => `${api.coreV1}/users/${hash}/addresses`,
    ADD_ADDRESS: () => `${api.martV1}/user/address/create`,
    EDIT_ADDRESS: () => `${api.martV1}/user/address/edit`,
    DELETE_ADDRESS: () => `${api.martV1}/user/address/delete`,
    LOAD: () => `${api.martV1}/user/load`,
  },
  LOG: {
    WRITE_LOG: () => `${api.logBase}/write?db=snappmarketlog`,
    GET_IP: () => 'https://ip.ikepler.ir/',
  },
  MAP: {
    MAP_IR_REVERSE_GEO_CODER: () => `${Map.mapir.baseUrl}/reverse`,
    MAP_IR_SEARCH_LOCATION: () => `${Map.mapir.baseUrl}/search`,

    SMAPP_REVERSE_GEO_CODER: () => `${Map.smapp.baseUrl('reverse')}/reverse`,
    SMAPP_SEARCH_LOCATION: () =>
      `${Map.smapp.baseUrl('search')}/autocomplete/json/`,

    CEDAR_MAP_REVERSE_GEO_CODER: ({ lat, lng }) =>
      `${Map.cedarmap.baseUrl}/${lat},${lng}.json`,
    CEDAR_MAP_SEARCH_LOCATION: ({ text }) => `${Map.cedarmap.baseUrl}/${text}`,
  },
};
export default endpoints;
