import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authSelectors, authActions } from 'ducks';

import { useFocus, useTimer } from '@snappmarket/hooks';
import { Col, Row, Input, Button } from '@snappmarket/ui';
import { englishNumber, persianNumber } from '@snappmarket/helpers';

import APP_INFO from 'constants/appInfo';
import userMessages from 'constants/Messages/user.messages';
import generalMessages from 'constants/Messages/general.messages';

import {
  StyledTabContainer,
  StyledLocationContainer,
  StyledCounter,
} from '../styles';
import { context as authContext } from '../context/authContext';

const SignUpForm = props => {
  const {
    loginWithNoPass,
    registerWithOptionalPass,
    registerWithOptionalPassStatus,
  } = props;

  const { cellphone, setLoggedIn } = useContext(authContext);
  const [verification, setVerification] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { time, start: startTimer, reset: resetTimer } = useTimer({
    endTime: 0,
    initialTime: 100,
    timerType: 'DECREMENTAL',
  });
  const focusRef = useFocus(null);

  const handleSignupForm = e => {
    e.preventDefault();
    registerWithOptionalPass({
      verification: verification.trim(),
      firstname: firstName.trim(),
      lastname: lastName.trim(),
      email: false,
      code: englishNumber(verification),
      cellphone: englishNumber(cellphone),
      client: APP_INFO.CLIENT,
      deviceType: APP_INFO.DEVICE_TYPE,
      appVersion: APP_INFO.APP_VERSION,
    });
  };

  const handleResendVerification = e => {
    e.preventDefault();
    loginWithNoPass({
      cellphone: englishNumber(cellphone),
      resend: true,
    });
    resetTimer();
    startTimer();
  };

  /**
   * User logged in so close modal
   */
  if (registerWithOptionalPassStatus === APP_INFO.API_STATUSES.SUCCESS) {
    setLoggedIn(true);
  }

  return (
    <>
      <StyledLocationContainer className="justify-center">
        <h2>{userMessages.codeSentToMobile(persianNumber(cellphone))}</h2>
      </StyledLocationContainer>
      <form className="justify-center" onSubmit={handleSignupForm}>
        <StyledTabContainer>
          <Row>
            <Col xs={12}>
              <Input
                autoComplete="off"
                required="required"
                type="text"
                maxlength={5}
                label={userMessages.verificationCode}
                placeholder={userMessages.enterVerificationCode}
                value={persianNumber(verification)}
                ref={focusRef}
                onChange={e => {
                  if (e.target.value.length <= 5)
                    setVerification(e.target.value);
                }}
                id="verification"
                autoFocus
              />
              <Input
                type="text"
                maxlength="5"
                label={userMessages.name}
                placeholder={userMessages.namePlaceholder}
                value={firstName}
                onChange={e => {
                  setFirstName(e.target.value);
                }}
                id="name"
                required="required"
              />
              <Input
                required="required"
                type="text"
                maxlength="5"
                label={userMessages.lastname}
                placeholder={userMessages.lastnamePlaceholder}
                value={lastName}
                id="lastname"
                onChange={e => {
                  setLastName(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="justify-center pt-2">
            <Col sm={12}>
              <Button
                size="md"
                title={userMessages.acceptVerificationCode}
                disabled={
                  registerWithOptionalPassStatus ===
                  APP_INFO.API_STATUSES.REQUEST
                }
                fullWidth
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {time !== 0 ? (
                <StyledCounter>
                  {!!time &&
                    persianNumber(generalMessages.waitUntilResend(time))}
                </StyledCounter>
              ) : (
                <Button
                  size="sm"
                  color="gray"
                  shade="normal"
                  modifier="link"
                  disabled={time !== 0}
                  onClick={handleResendVerification}
                  className="mt-1"
                  title={userMessages.resendVerificationCode}
                  fullWidth
                />
              )}
            </Col>
          </Row>
        </StyledTabContainer>
      </form>
    </>
  );
};

SignUpForm.propTypes = {
  registerWithOptionalPass: PropTypes.func,
  registerWithOptionalPassStatus: PropTypes.string,
  loginWithNoPass: PropTypes.func,
};

const mapStateToProps = state => ({
  registerWithOptionalPassStatus: authSelectors.getRegisterWithOptionalPassStatus(
    state,
  ),
});

export default connect(mapStateToProps, {
  registerWithOptionalPass: authActions.registerWithOptionalPassRequest,
  loginWithNoPass: authActions.loginWithNoPassRequest,
})(SignUpForm);
