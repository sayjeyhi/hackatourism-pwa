import songTypes from './types';

const initialStates = {
  cities: [],
  provinces: [],
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case songTypes.GET_CITIES_LIST_SUCCESS:
      return {
        ...state,
        cities: action.payload,
      };
    case songTypes.GET_PROVINCES_LIST_SUCCESS:
      return {
        ...state,
        provinces: action.payload,
      };
    default:
      return state;
  }
};
