// React requirements
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { getBundles } from 'react-loadable-ssr-addon';

import Hoc from 'components/Common/Hoc';
import APP_INFO from 'constants/appInfo';
import { delog, racePromise } from '@snappmarket/helpers';
import { fetchDataForRender } from './fetchDataForRender';
import createStore from '../../app/config/configureStoreSSR';

import { indexHtml } from './indexHtml';

// eslint-disable-next-line react/prop-types
const ServerApp = ({ context, location, store }) => (
  <ReduxProvider store={store}>
    <StaticRouter location={location} context={context}>
      <Hoc routerProvider="server" />
    </StaticRouter>
  </ReduxProvider>
);

export const renderServerSideApp = async (req, res) => {
  // Cookies that have not been signed
  APP_INFO.IS_SERVER = true;
  APP_INFO.NODE_GLOBALS = {
    cookies: req.cookies,
    res,
  };

  const { store } = createStore(req.url);

  /**
   * Preload loadable components data
   */
  await Loadable.preloadAll();

  /**
   * Watch initial saga actions finish
   * @type {Promise<unknown>}
   */
  const waitUntilReduxJobFinish = new Promise(resolve => {
    const handleStoreChange = () => {
      if (
        !Object.values(store.getState().loading).includes(
          APP_INFO.API_STATUSES.REQUEST,
        ) &&
        !store.getState().core.loading
      ) {
        resolve();
      }
    };

    store.subscribe(handleStoreChange);
  });

  /**
   * Get app api data needs combined
   * @type {Promise<unknown[]>}
   */
  const fetchAppNeededData = Promise.all([
    fetchDataForRender(ServerApp, req, store),
    waitUntilReduxJobFinish,
  ]);

  /**
   * Race promises to get callback
   * @type {Promise<any>}
   */
  const loadApp = await Promise.race([
    fetchAppNeededData,
    racePromise(process.env.SSR_APIS_TIMEOUT || 10000),
  ]);

  /**
   * Combine all promises and load our app finally
   */
  await loadApp;

  renderApp(ServerApp, req, res, store);
};

// eslint-disable-next-line no-shadow
function renderApp(ServerApp, req, res, store) {
  const context = {};
  const modules = [];

  // eslint-disable-next-line no-console
  delog(`_______ HTML Rendered at :: ${new Date().toLocaleTimeString()}`);
  const sheet = new ServerStyleSheet();
  try {
    const markup = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StyleSheetManager sheet={sheet.instance}>
          <ServerApp location={req.url} store={store} context={context} />
        </StyleSheetManager>
      </Loadable.Capture>,
    );

    /**
     * Get styledComponents global styles
     */
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    let bundles = { js: [{ file: 'js/main.js' }] };
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line global-require
      const manifest = require(`../../build/${process.env.PUBLIC_URL}/ssr-assets-manifest.json`);
      const modulesToBeLoaded = [
        ...manifest.entrypoints,
        ...Array.from(modules),
      ];
      bundles = getBundles(manifest, modulesToBeLoaded);
    }

    if (context.url) {
      res.redirect(context.url);
    } else {
      const fullMarkup = indexHtml({
        helmet: Helmet.renderStatic(),
        bundles,
        state: store.getState(),
        markup,
        styleTags,
      });

      res.status(200).send(fullMarkup);
    }
  } catch (error) {
    // handle error
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    sheet.seal();
  }
}
