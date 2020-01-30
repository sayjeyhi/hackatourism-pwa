import authorizedActions from 'constants/authorizedActions';
import { coreActions } from 'ducks/index';
import { isTokenExpired } from 'constants/Helpers/jwtHelpers';
import { ApiError } from '@snappmarket/helpers';

const whiteList = [...authorizedActions];

const jwtGate = store => next => action => {
  // next();
  // try {
  //   if (store.getState().user.isLoggedIn) {
  //     if (whiteList.includes(action.type) && isTokenExpired()) {
  //       store.dispatch(coreActions.queueAction(action));
  //     } else {
  //       next(action);
  //     }
  //   } else {
  //     next(action);
  //   }
  // } catch (e) {
  //   throw new ApiError('JWT_TOKEN_ERROR');
  // }
};
export default jwtGate;
