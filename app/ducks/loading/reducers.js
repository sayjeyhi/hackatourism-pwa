import { normalizeActionType, delog } from '@snappmarket/helpers';
import loadingTypes from './types';
import loadingUtils from './utils';

export default (state = {}, action) => {
  const { type } = action;

  /* eslint-disable no-case-declarations */
  switch (type) {
    case loadingTypes.CLEAR_ONE:
      const [, requestActionName] = normalizeActionType(action.payload.type);
      return {
        ...state,
        [requestActionName]: null,
      };
    case loadingTypes.CLEAR_SOME:
      const typesToClear = loadingUtils.normalizeSomeTypes(action.payload);
      return {
        ...state,
        ...typesToClear,
      };
    case loadingTypes.CLEAR_ALL:
      return {};
    default:
      const [, requestName, requestState] = normalizeActionType(type);

      if (requestName.length === 0) return state;
      delog(`${requestName}  ::  ${requestState}`);

      return {
        ...state,
        [requestName]: requestState,
      };
  }
  /* eslint-enable no-case-declarations */
};
