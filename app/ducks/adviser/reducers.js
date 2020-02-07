import songTypes from './types';

const initialStates = {
  advisers: [],
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case songTypes.GET_ADVISERS_LIST_SUCCESS:
      return {
        ...state,
        advisers: action.payload,
      };
    case songTypes.GET_ADVISERS_LIST_FAILURE:
      return {
        ...state,
        advisers: [],
      };
    default:
      return state;
  }
};
