import { actionMaker } from '@snappmarket/helpers';
import coreTypes from './types';

export default {
  clearCore: () => actionMaker(coreTypes.CLEAR_CORE),
  purgeStorage: () => actionMaker(coreTypes.PURGE_STORAGE),
};
