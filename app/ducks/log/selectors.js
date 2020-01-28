import { createSelector } from 'reselect';

/**
 * Main selector : we can memoize this functions later
 */
const getLog = state => state.log;
const getIp = createSelector(getLog, log => log.ip);
const getLogs = createSelector(getLog, log => log.logs);

export default {
  getLogs: createSelector(getLogs, logs => logs.data),
  getIpAddress: createSelector(getIp, ip => ip.address),
  getIpGettingStatus: state => getIp(state).loading,
  getLogsSendingStatus: state => getLogs(state).sending,
};
