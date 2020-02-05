import React from 'react';
import ssrPrepass from 'react-ssr-prepass';
import { delog } from '@snappmarket/helpers';

/**
 * Get real name of component
 * @param WrappedComponent
 * @returns {*|string}
 */
const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

/**
 * Use ssrPrepass until suspense become react handy
 * @param ServerApp
 * @param req
 * @param store
 * @returns {*}
 */
export const fetchDataForRender = async (ServerApp, req, store) => {
  const VisitorPromise = async element => {
    if (element && element.type && element.type.fetchData) {
      // eslint-disable-next-line no-console
      delog(
        `---- ${getDisplayName(
          element.type,
        )}.fetchData called At :: ${new Date().toLocaleTimeString()}`,
      );

      element.type.fetchData(element.props, {
        params: req.params,
        query: req.query,
      });
    }
  };

  // eslint-disable-next-line consistent-return,no-return-await
  return ssrPrepass(
    <ServerApp location={req.url} store={store} />,
    await VisitorPromise,
  );
};
