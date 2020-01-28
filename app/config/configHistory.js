import { createBrowserHistory, createMemoryHistory } from 'history';

/**
 * Check if we are on server and make valid history object
 * @param isServer
 * @param url
 * @returns {MemoryHistory<LocationState> | History<LocationState>}
 */
export default (isServer, url) => {
  const isDevMode =
    process && process.env && process.env.NODE_ENV === 'development';

  const contextPath = isDevMode ? '/' : '/';
  /* eslint-disable indent */
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url],
      })
    : createBrowserHistory({
        basename: contextPath,
      });

  /* eslint-enable indent */
  return history;
};
