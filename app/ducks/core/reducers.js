import coreTypes from './types';

const coreDefaultState = {
  mapType: null,
};

const coreReducer = (state = coreDefaultState, action) => {
  switch (action.type) {
    case coreTypes.SET_MAP_TYPE:
      return {
        ...state,
        mapType: action.payload,
      };
    case coreTypes.CLEAR_CORE:
      return coreDefaultState;
    default:
      return state;
  }
};

export default coreReducer;
