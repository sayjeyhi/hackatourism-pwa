import createStatusSelector from 'ducks/loading/selectors';
import loadingActions from 'ducks/loading/actions';
import { useDispatch } from 'react-redux';

/**
 * useStatus
 * @param action
 */
const useApiStatus = action => {
  const status = createStatusSelector(action);
  const dispatch = useDispatch();

  return [status, dispatch(loadingActions.clearOne(action))];
};

export default useApiStatus;
