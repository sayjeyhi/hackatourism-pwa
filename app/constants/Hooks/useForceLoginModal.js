import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'ducks/index';

/**
 * Force showing login modal
 */
const useForceLoginModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const setForcedModal = value =>
      dispatch(authActions.setForceAuthModal(value));

    setForcedModal(true);
    return () => {
      setForcedModal(false);
    };
  }, []);
};

export default useForceLoginModal;
