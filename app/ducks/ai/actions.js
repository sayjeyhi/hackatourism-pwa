import { actionMaker } from '@snappmarket/helpers';
import productsTypes from './types';

export default {
  getCitiesPath: payload => actionMaker(productsTypes.SHOW_PLAYER, payload),
  getAirlinesPath: payload => actionMaker(productsTypes.HIDE_PLAYER, payload),
};
