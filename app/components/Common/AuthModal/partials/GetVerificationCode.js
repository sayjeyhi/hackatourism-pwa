import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions, authSelectors } from 'ducks';

import userMessages from 'constants/Messages/user.messages';
import generalMessages from 'constants/Messages/general.messages';
import APP_INFO from 'constants/appInfo';

import { englishNumber, persianNumber } from '@snappmarket/helpers';
import { useFocus, useTimer } from '@snappmarket/hooks';
import { Col, Row, Input, Button } from '@snappmarket/ui';

import { context as authContext } from '../context/authContext';

import {
  StyledTabContainer,
  StyledLocationContainer,
  StyledCounter,
} from '../styles';

const GetVerificationCode = props => {
  const {
    loginMobileWithToken,
    loginMobileWithTokenStatus,
    loginWithNoPass,
  } = props;

  const { cellphone, setLoggedIn } = useContext(authContext);
  const [verification, setVerification] = useState('');
  const { time, start: startTimer, reset: resetTimer } = useTimer({
    endTime: 0,
    initialTime: 60,
    timerType: 'DECREMENTAL',
  });
  const verificationRef = useFocus(null);

  const handleSendVerificationCode = e => {
    e.preventDefault();
    loginMobileWithToken({
      cellphone: englishNumber(cellphone),
      code: englishNumber(verification),
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

  const handleVerificationCodeChange = e => {
    if (e.target.value.length <= 5) {
      setVerification(e.target.value.replace(/[^0-9۰-۹]/g, ''));
    }
    e.target.setCustomValidity('');
  };

  /**
   * User logged in so close modal
   */
  useEffect(() => {
    if (loginMobileWithTokenStatus === APP_INFO.API_STATUSES.SUCCESS) {
      setLoggedIn(true);
    }
  }, [loginMobileWithTokenStatus]);

  return (
    <>
      <StyledLocationContainer className="justify-center">
        <h2>{userMessages.codeSentToMobile(persianNumber(cellphone))}</h2>
      </StyledLocationContainer>
      <form className="justify-center" onSubmit={handleSendVerificationCode}>
        <StyledTabContainer>
          <Row>
            <Col xs={12}>
              <Input
                autoComplete="off"
                type="text"
                maxlength={5}
                label={userMessages.verificationCode}
                placeholder={userMessages.enterVerificationCode}
                value={persianNumber(verification)}
                required="required"
                ref={verificationRef}
                onChange={handleVerificationCodeChange}
                onInvalid={e => {
                  e.target.setCustomValidity(generalMessages.fieldIsRequired);
                }}
                autoFocus
                id="verification"
              />
            </Col>
          </Row>
          <Row className="justify-center pt-1">
            <Col sm={12}>
              <Button
                size="md"
                title={userMessages.acceptVerificationCode}
                disabled={
                  loginMobileWithTokenStatus === APP_INFO.API_STATUSES.REQUEST
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

GetVerificationCode.propTypes = {
  loginMobileWithToken: PropTypes.func,
  loginMobileWithTokenStatus: PropTypes.string,
  loginWithNoPass: PropTypes.func,
};

const mapStateToProps = state => ({
  loginMobileWithTokenStatus: authSelectors.getLoginMobileWithTokenStatus(
    state,
  ),
});

export default connect(mapStateToProps, {
  loginMobileWithToken: authActions.loginMobileWithTokenRequest,
  loginWithNoPass: authActions.loginWithNoPassRequest,
})(GetVerificationCode);
