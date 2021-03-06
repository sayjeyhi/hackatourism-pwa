import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createStateSyncMiddleware } from 'redux-state-sync';
import { configPersistor } from '@snappmarket/helpers';

import { coreTypes } from 'ducks';

import rootSaga from './configSagas';
import rootReducer from 'constants/rootReducers';
import reduxStateSyncWhiteList from 'constants/reduxStateSyncWhiteList';

import configReducers from './configReducers';
import configHistory from './configHistory';

export default (url = '/') => {
  const history = configHistory(false, url);
  const injectedReducer = configReducers(rootReducer, history);
  const persistor = configPersistor({
    prefix: 'persist:_',
    whitelist: ['vendor', 'core', 'basket', 'user'],
    purgeActionType: coreTypes.PURGE_STORAGE,
  });

  const reduxStateSyncConfig = {
    whitelist: reduxStateSyncWhiteList,
  };

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  /**
   * Add client special middle-wares here
   */
  middlewares.push(createStateSyncMiddleware(reduxStateSyncConfig));

  /**
   * Add persistor middleware
   */
  middlewares.push(persistor.getMiddleware);

  const enhancers = [];

  /* eslint-disable indent */
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    typeof window === 'object' &&
    process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Koleposhti',
        actionsBlacklist: ['REDUX_STORAGE_SAVE'],
      })
      : compose;
  /* eslint-enable indent */

  // Do we have pre-loaded state available? Great, save it.
  /* eslint-disable no-underscore-dangle */
  const localstorageInitialState = persistor.makeInitialState({});
  const initialState = window.__PRELOADED_STATE__ || localstorageInitialState;
  delete window.__PRELOADED_STATE__;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    injectedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares), ...enhancers),
  );

  // const store = createStore(injectedReducer, composeEnhancers(...enhancers));
  if (module.hot) {
    module.hot.accept('./configReducers', () => {
      store.replaceReducer(injectedReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return { store, history };
};
