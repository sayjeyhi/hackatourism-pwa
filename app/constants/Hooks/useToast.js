import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { immediateToast } from 'constants/ServerWrappers/iziToastWrapper';
import '../../resources/styles/iziToast.css';

import { messageSelectors, messageActions } from '../../ducks';

const useToast = () => {
  const toasts = useSelector(state => messageSelectors.getToasts(state));
  const dispatch = useDispatch();

  useEffect(() => {
    // pop this message from store
    const clearToast = () => dispatch(messageActions.clearToast());
    // show all messages
    toasts.forEach(toast => {
      clearToast();
      let message = `<b>${toast.title}</b>`;
      if (toast.description) {
        message += `<div class="toast-description">${toast.description} </div>`;
      }

      immediateToast(toast.type, {
        message,
        position: 'bottomLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        timeout: 5000,
        rtl: true,
      });
    });
  }, [toasts, dispatch]);
};

export default useToast;
