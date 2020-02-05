import { clearAlert, normalizeMessageType } from './utils';
import messageTypes from './types';

const initialStates = {
  alerts: {},
  toasts: [],
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case messageTypes.SHOW_ALERT:
      // eslint-disable-next-line no-case-declarations
      const type = normalizeMessageType(action.payload.key);
      return {
        ...state,
        alerts: {
          ...state.alerts,
          [type]: { ...action.payload },
        },
      };
    case messageTypes.SHOW_TOAST:
      return { ...state, toasts: [...state.toasts, action.payload] };
    case messageTypes.CLEAR_ALERT:
      return {
        ...state,
        alerts: clearAlert(action.payload, state.alerts),
      };
    case messageTypes.CLEAR_TOAST:
      return { ...state, toasts: state.toasts.slice(0, -1) };
    default:
      return state;
  }
};
