import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Hoc from './components/Common/Hoc';
import createStore from './config/configureStore';
import { ServerProvider } from './constants/Contexts/serverContext';
import registerServiceWorker from './registerServiceWorker';

const { store, history } = createStore();

ReactDOM.render(
  <ServerProvider
    value={{
      isServer: false,
    }}
  >
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Hoc />
        </BrowserRouter>
      </ConnectedRouter>
    </ReduxProvider>
  </ServerProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
