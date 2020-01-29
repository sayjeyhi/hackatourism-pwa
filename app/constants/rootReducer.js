import coreReducer from '../ducks/core/reducers';
import mapReducer from '../ducks/map/reducers';
import messageReducer from '../ducks/message/reducers';
import userReducer from '../ducks/user/reducers';
import logReducer from '../ducks/log/reducers';
import loadingReducer from '../ducks/loading/reducers';
import authReducer from '../ducks/auth/reducers';
import productReducer from '../ducks/ticket/reducers';

/**
 * Out root reducers
 * @note: add reducers with alphabetical order PLEASE
 * @type {{basket: *, core: *, auth: *, log: *, vendor: *, loading: *, map: *, user: *, order: *, productsList: *}}
 */
const rootReducer = {
  auth: authReducer,
  core: coreReducer,
  loading: loadingReducer,
  log: logReducer,
  map: mapReducer,
  message: messageReducer,
  product: productReducer,
  user: userReducer,
};

export default rootReducer;
