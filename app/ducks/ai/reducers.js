import songTypes from './types';

const initialStates = {
  city_paths: [],
  airline_paths: [],
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case songTypes.GET_AIRLINES_PATH_SUCCESS:
      return {
        ...state,
        airline_paths: action.payload,
      };
    case songTypes.GET_AIRLINES_PATH_FAILURE:
      return {
        ...state,
        airline_paths: [],
      };

    case songTypes.GET_CITIES_PATH_SUCCESS:
      return {
        ...state,
        city_paths: action.payload,
      };
    case songTypes.GET_CITIES_PATH_FAILURE:
      return {
        ...state,
        city_paths: [],
      };
    default:
      return state;
  }
};
