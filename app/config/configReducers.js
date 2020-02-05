import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const configReducers = (rootReducer, history) =>
  combineReducers({
    router: connectRouter(history),
    ...rootReducer,
  });
export default configReducers;
