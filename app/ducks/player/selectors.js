import { createSelector } from 'reselect';
const getPlayer = state => state.player;

export default {
  getPlayerStatus: createSelector(getPlayer, player => player.playerVisible),
  getSongType: createSelector(getPlayer, player => player.category),
};
