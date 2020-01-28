import { createSelector } from 'reselect';
import { normalizeActionType } from '@snappmarket/helpers';
import APP_INFO from 'constants/appInfo';

/**
 * Main selector : we can memoize this functions later
 */
const getLoading = state => state.loading;

/**
 * Create selector
 * @param action
 * @returns {function(*): *}
 */
export default action => {
  const [, requestActionName] = normalizeActionType(action.type);
  return createSelector(
    getLoading,
    loading => loading[requestActionName] || APP_INFO.API_STATUSES.NOT_CALLED,
  );
};
