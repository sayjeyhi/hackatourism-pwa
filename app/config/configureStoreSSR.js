import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import configSagas from './configSagas';
import configReducers from './configReducers';
import configHistory from './configHistory';
import jwtGate from './Middlewares/jwtGate';

export default (url = '/') => {
  const history = configHistory(true, url);

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [jwtGate, sagaMiddleware];

  const enhancers = [];

  const composeEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
  );

  // Do we have pre-loaded state available? Great, save it.
  const initialState = {};

  const store = createStore(configReducers, initialState, composeEnhancers);

  if (module.hot) {
    module.hot.accept('./configReducersSSR', () => {
      store.replaceReducer(configReducers);
    });
  }

  sagaMiddleware.run(configSagas);

  return { store, history };
};
