import { useDispatch } from 'react-redux';
import logActions from '../../ducks/log/actions';

/**
 * Make write log available every where
 * @returns {{writeLog: (function(*=))}}
 */
const useLog = () => {
  const dispatch = useDispatch();
  return {
    writeLog: payload => dispatch(logActions.writeLog(payload)),
  };
};

export default useLog;
