import Map from './mapSettings';
const api = {
  v1: `${process.env.API_URL}/v1`,
};

const endpoints = {
  AUTH: {
    LOGIN: () => `${api.v1}/user/login`,
    REGISTER: () => `${api.v1}/user/register`,
    LOGOUT: () => `${api.v1}/user/logout`,
  },
  USER: {
    PROFILE: () => `${api.v1}/user/profile`,
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
