import { combineReducers } from 'redux';

const configReducersSSR = rootReducer =>
  combineReducers({
    ...rootReducer,
  });
export default configReducersSSR;
