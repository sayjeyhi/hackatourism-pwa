import { createSelector } from 'reselect';

/**
 * Main selector : we can memoize this functions later
 */
const getCore = state => state.core;

export default {
  getLoading: createSelector(getCore, core => core.loading),
};
