import { actionMaker } from '@snappmarket/helpers';
import authTypes from './types';

export default {
  clearOne: payload => actionMaker(authTypes.CLEAR_ONE, payload),
  clearSome: payload => actionMaker(authTypes.CLEAR_SOME, payload),
  clearAll: () => actionMaker(authTypes.CLEAR_ALL),
};
