import { createSelector } from 'reselect';
const getAdvisers = state => state.advisers;

export default {
  getAdvisers: createSelector(getAdvisers, advisers => advisers.advisers),
};
