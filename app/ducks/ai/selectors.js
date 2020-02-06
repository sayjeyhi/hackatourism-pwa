import { createSelector } from 'reselect';
const getAI = state => state.ai;

export default {
  getFlightsPath: createSelector(getAI, player => player.city_paths),
  getCitiesPath: createSelector(getAI, player => player.airline_paths),
};
