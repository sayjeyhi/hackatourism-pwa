import coreTypes from './types';

const coreDefaultState = {
  loading: false,
  experiments: null,
  mapType: null,
  queuedActions: [],
};

const coreReducer = (state = coreDefaultState, action) => {
  switch (action.type) {
    case coreTypes.INITIALIZE:
      return {
        ...state,
        loading: true,
      };
    case coreTypes.INITIALIZE_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case coreTypes.SET_EXPERIMENTS:
      return {
        ...state,
        experiments: action.payload,
      };
    case coreTypes.SET_MAP_TYPE:
      return {
        ...state,
        mapType: action.payload,
      };
    case coreTypes.QUEUE_ACTION:
      return {
        ...state,
        queuedActions: [...state.queuedActions, action.payload],
      };
    case coreTypes.QUEUE_ACTION_SUCCESS:
    case coreTypes.QUEUE_ACTION_FAILURE:
      return {
        ...state,
        queuedActions: [],
      };
    case coreTypes.CLEAR_CORE:
      return coreDefaultState;
    default:
      return state;
  }
};

export default coreReducer;
