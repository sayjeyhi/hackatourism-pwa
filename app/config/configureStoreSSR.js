import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../constants/rootSaga';
import rootReducer from '../constants/rootReducer';
import configHistory from './configHistory';
import configReducersSSR from './configReducersSSR';
import jwtGate from './Middlewares/jwtGate';

export default (url = '/') => {
  const history = configHistory(true, url);
  const injectedReducer = configReducersSSR(rootReducer);

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

  // const store = createStore(injectedReducer, composeEnhancers(...enhancers));
  if (module.hot) {
    module.hot.accept('./configReducersSSR', () => {
      store.replaceReducer(injectedReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return { store, history };
};
