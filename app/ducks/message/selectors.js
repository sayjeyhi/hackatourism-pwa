import { createSelector } from 'reselect';
import { normalizeMessageType } from './utils';

/**
 * Main selector : we can memoize this functions later
 */
const getMessage = state => state.message;

export default {
  getAlert: key =>
    createSelector(
      getMessage,
      message => message.alerts[normalizeMessageType(key)],
    ),
  getToasts: createSelector(getMessage, message => message.toasts),
};
