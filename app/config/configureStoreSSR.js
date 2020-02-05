import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'constants/rootReducers';
import configSagas from './configSagas';
import configReducers from './configReducers';
import configHistory from './configHistory';
import jwtGate from './Middlewares/jwtGate';

export default (url = '/') => {
  const history = configHistory(true, url);
  const injectedReducer = configReducers(rootReducer, history);

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [jwtGate, sagaMiddleware];

  const enhancers = [];

  const composeEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
  );

  // Do we have pre-loaded state available? Great, save it.
  const initialState = {};

  const store = createStore(injectedReducer, initialState, composeEnhancers);

  if (module.hot) {
    module.hot.accept('./configReducersSSR', () => {
      store.replaceReducer(injectedReducer);
    });
  }

  sagaMiddleware.run(configSagas);

  return { store, history };
};
