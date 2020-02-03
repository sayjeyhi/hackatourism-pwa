import coreReducer from 'ducks/core/reducers';
import mapReducer from 'ducks/map/reducers';
import messageReducer from 'ducks/message/reducers';
import userReducer from 'ducks/user/reducers';
import loadingReducer from 'ducks/loading/reducers';
import authReducer from 'ducks/auth/reducers';
import ticketReducer from 'ducks/ticket/reducers';
import weatherReducer from 'ducks/weather/reducers';
import playerReducer from 'ducks/player/reducers';

/**
 * Out root reducers
 * @note: add reducers with alphabetical order PLEASE
 * @type {{basket: *, core: *, auth: *, log: *, vendor: *, loading: *, map: *, user: *, order: *, productsList: *}}
 */
const configReducers = {
  auth: authReducer,
  core: coreReducer,
  loading: loadingReducer,
  map: mapReducer,
  message: messageReducer,
  ticket: ticketReducer,
  weather: weatherReducer,
  user: userReducer,
  player: playerReducer,
};

export default configReducers;
