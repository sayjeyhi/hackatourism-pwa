import Map from './mapSettings';
const api = {
  v1: `https://api.koleposhti.app/api/v1`,
};

const ai_api = {
  v1: `https://ai.koleposhti.app/v1`,
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
  AI: {
    GET_CITIES_PATH: () => `${ai_api.v1}/cities`,
    GET_AIRPLANES_PATH: () => `${api.v1}/airports`,
  },
  MUSIC: {
    GET_MUSICS: () => `${api.v1}/getMusics`,
    GET_MUSICS_TYPES: () => `${api.v1}/getMusicTypes`,
  },
  VOIP: {
    CALL: () => `${api.v1}/viop/call`,
    ADVISERS: id => `${api.v1}/advisers/${id}`,
  },
  PROFILE: {
    GET: uid => `${api.v1}/profile/${uid}`,
    SAVE: uid => `${api.v1}/profile/${uid}`,
    UPLOAD_AVATAR: uid => `${api.v1}/profile/${uid}/profile`,
  },
  TRIP_SCHEDULE: {
    GET: () => `${api.v1}/trip_schedule`,
    SAVE: () => `${api.v1}/trip_schedule`,
    UPDATE: id => `${api.v1}/trip_schedule/${id}`,
    GET_SINGLE: id => `${api.v1}/trip_schedule/${id}/schedules`,
  },
  PLACE: {
    TYPES_GET: () => `${api.v1}/place/type`,
    NEAR_ME: () => `${api.v1}/place/places/near_me`,
    GET_TYPES_LIST: typeId => `${api.v1}/place/places/${typeId}`,
    GET_SINGLE: id => `${api.v1}/trip_schedule/${id}/schedules`,
  },
  CITY: {
    GET_MULTI: () => `${api.v1}/place/city`,
    GET_TOP_CITIES: () => `${api.v1}/place/city/top`,
    GET_CITY_PAGE: id => `${api.v1}/place/city/${id}`,
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
