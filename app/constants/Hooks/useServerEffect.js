import { useEffect } from 'react';
import useServerContext from 'constants/Hooks/useServerContext';
import serverHelpers from '../Helpers/serverHelpers';

export default (fn, inputs) => {
  const { isServer } = useServerContext();

  useEffect(() => {
    if (!isServer || serverHelpers.isHydrationFinish()) {
      fn();
    }
  }, inputs);
};
