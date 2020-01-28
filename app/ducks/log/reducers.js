import logTypes from './types';
const initialState = {
  ip: {
    getting: false,
    ip: null,
  },
  logs: {
    sending: false,
    data: [],
  },
};

const logReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    //  Entity: IP
    case logTypes.GET_IP_REQUEST:
      return {
        ...state,
        ip: {
          getting: true,
          address: '0.0.0.0',
        },
      };
    case logTypes.GET_IP_SUCCESS:
      return {
        ...state,
        ip: {
          getting: false,
          address: payload,
        },
      };
    case logTypes.GET_IP_FAILURE:
      return {
        ...state,
        ip: {
          getting: false,
          ip: '0.0.0.0',
        },
      };

    //  Entity: Log
    case logTypes.APPEND_LOG:
      return {
        ...state,
        logs: {
          ...state.logs,
          data: [...state.logs.data, payload],
        },
      };
    case logTypes.SEND_LOG_REQUEST:
      return {
        ...state,
        logs: {
          ...state.logs,
          sending: true,
        },
      };
    case logTypes.SEND_LOG_SUCCESS:
      return {
        ...state,
        logs: {
          ...state.logs,
          sending: false,
          data: [],
        },
      };
    case logTypes.SEND_LOG_FAILURE:
      return {
        ...state,
        logs: {
          ...state.logs,
          sending: false,
        },
      };

    default:
      return state;
  }
};

export default logReducer;
