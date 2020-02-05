import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  userSelectors,
  loadingActions,
  authActions,
  authSelectors,
} from 'ducks';

import userMessages from 'constants/Messages/user.messages';
import { Modal } from '@snappmarket/ui';

import { AuthProvider } from './context/authContext';
import GetCellPhone from './partials/GetCellPhone';
import GetVerificationCode from './partials/GetVerificationCode';
import SignUpForm from './partials/SignUpForm';
import { StyledBackButton } from './styles';

const AuthModal = props => {
  const {
    authModalVisibility,
    forceAuthModalVisibility,
    isUserLoggedIn,
    hideAuthModal,
    clearLoadingStatus,
  } = props;
  const [step, setStep] = useState('cellphone');
  const [cellphone, setCellphone] = useState('');
  const [modalVisibility, setModalVisibility] = useState(
    !isUserLoggedIn && authModalVisibility,
  );

  /**
   * Trigger state change on visibility change
   */
  useEffect(() => {
    setModalVisibility(
      !isUserLoggedIn && (authModalVisibility || forceAuthModalVisibility),
    );
  }, [authModalVisibility, forceAuthModalVisibility, isUserLoggedIn]);

  const forceStepCellphone = () => {
    clearLoadingStatus(authActions.loginRequest());
    setStep('cellphone');
  };

  return (
    <AuthProvider
      value={{
        step,
        setStep,
        cellphone,
        setCellphone,
        setLoggedIn: setModalVisibility,
      }}
    >
      {modalVisibility && (
        <Modal
          width={50}
          visibility={modalVisibility}
          header={
            <h3 className="m-1 text-center">{userMessages.loginModalTitle}</h3>
          }
          handleClose={!forceAuthModalVisibility && hideAuthModal}
        >
          {step !== 'cellphone' && (
            <StyledBackButton
              icon="angle-right"
              className="circle p-absolute"
              color="gray"
              shade="bright"
              onClick={() => {
                forceStepCellphone();
              }}
            />
          )}
          {forceAuthModalVisibility && (
            <StyledBackButton
              icon="angle-right"
              className="circle p-absolute"
              color="gray"
              shade="bright"
              onClick={() => {
                window.history.back();
              }}
            />
          )}
          {step === 'cellphone' && <GetCellPhone />}
          {step === 'verification' && <GetVerificationCode />}
          {step === 'signUp' && <SignUpForm />}
        </Modal>
      )}
    </AuthProvider>
  );
};

AuthModal.propTypes = {
  authModalVisibility: PropTypes.bool,
  forceAuthModalVisibility: PropTypes.bool,
  isUserLoggedIn: PropTypes.bool,
  hideAuthModal: PropTypes.func,
  clearLoadingStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  authModalVisibility: authSelectors.getAuthModalVisibility(state),
  forceAuthModalVisibility: authSelectors.getForceAuthModalVisibility(state),
  isUserLoggedIn: userSelectors.getLoggedInStatus(state),
});

export default connect(mapStateToProps, {
  hideAuthModal: authActions.hideAuthModal,
  clearLoadingStatus: loadingActions.clearOne,
})(AuthModal);
