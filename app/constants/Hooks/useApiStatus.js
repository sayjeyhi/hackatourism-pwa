
import createStatusSelector from 'ducks/loading/selectors';
import { clearOne } from 'ducks/loading/actions';

/**
 * useStatus
 * @param action
 * @returns string 'REQUESTED'
 * @returns string 'NOT_CALLED'
 * @returns string 'SUCCESS'
 * @returns string 'FAILURE'
 */
const useApiStatus = action => {
  const status = createStatusSelector(action);

  return [status, clearer];
};

export default useApiStatus;
