import { actionMaker } from '@snappmarket/helpers';
import productsTypes from './types';

export default {
  showPlayer: payload => actionMaker(productsTypes.SHOW_PLAYER, payload),
  hidePlayer: payload => actionMaker(productsTypes.HIDE_PLAYER, payload),
  setSongType: payload => actionMaker(productsTypes.SET_SONG_TYPE, payload),
};
