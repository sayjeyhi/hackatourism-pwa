import songTypes from './types';

const initialStates = {
  playerVisible: false,
  category: '',
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case songTypes.SET_SONG_TYPE:
      return {
        ...state,
        category: action.payload,
      };
    case songTypes.SHOW_PLAYER:
      return {
        ...state,
        playerVisible: true,
      };
    case songTypes.HIDE_PLAYER:
      return {
        ...state,
        playerVisible: false,
        category: '',
      };
    default:
      return state;
  }
};
