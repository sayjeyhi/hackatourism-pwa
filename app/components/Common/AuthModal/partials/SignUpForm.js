import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions } from 'ducks';

import { useFocus } from '@snappmarket/hooks';
import { Col, Row, Input, Button } from '@snappmarket/ui';
import { englishNumber, persianNumber } from '@snappmarket/helpers';

import APP_INFO from 'constants/appInfo';
import userMessages from 'constants/Messages/user.messages';

import useApiStatus from 'constants/Hooks/useApiStatus';
import { StyledTabContainer, StyledLocationContainer } from '../styles';
import { context as authContext } from '../context/authContext';

const SignUpForm = props => {
  const { register } = props;

  const [registerStatus] = useApiStatus(register);
  const { cellphone, setLoggedIn } = useContext(authContext);
  const [verification, setVerification] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const { time, start: startTimer, reset: resetTimer } = useTimer({
  //   endTime: 0,
  //   initialTime: 100,
  //   timerType: 'DECREMENTAL',
  // });
  const focusRef = useFocus(null);

  const handleSignupForm = e => {
    e.preventDefault();
    register({
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
    // loginWithNoPass({
    //   cellphone: englishNumber(cellphone),
    //   resend: true,
    // });
    // resetTimer();
    // startTimer();
  };

  /**
   * User logged in so close modal
   */
  if (registerStatus === APP_INFO.API_STATUSES.SUCCESS) {
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
                disabled={registerStatus === APP_INFO.API_STATUSES.REQUEST}
                fullWidth
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button
                size="sm"
                color="gray"
                shade="normal"
                modifier="link"
                onClick={handleResendVerification}
                className="mt-1"
                title={userMessages.resendVerificationCode}
                fullWidth
              />
            </Col>
          </Row>
        </StyledTabContainer>
      </form>
    </>
  );
};

SignUpForm.propTypes = {
  register: PropTypes.func,
};

export default connect(null, {
  register: authActions.registerRequest,
})(SignUpForm);
