import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions } from 'ducks';

import { useFocus } from '@snappmarket/hooks';
import { Col, Row, Input, Button } from '@snappmarket/ui';
import { persianNumber } from '@snappmarket/helpers';

import APP_INFO from 'constants/appInfo';
import userMessages from 'constants/Messages/user.messages';

import useApiStatus from 'constants/Hooks/useApiStatus';
import { StyledTabContainer, StyledLocationContainer } from '../styles';
import { context as authContext } from '../context/authContext';

const SignUpForm = props => {
  const { register } = props;

  const [registerStatus] = useApiStatus(register);
  const { setLoggedIn, setStep } = useContext(authContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const focusRef = useFocus(null);

  const handleSignupForm = e => {
    e.preventDefault();
    register({
      name: name.trim(),
      email,
      phone: mobile,
      password,
    });
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
        <h2>از امروز هدفمندتر سفر کن</h2>
      </StyledLocationContainer>
      <form className="justify-center" onSubmit={handleSignupForm}>
        <StyledTabContainer>
          <Row>
            <Col xs={12}>
              <Input
                type="text"
                label="نام و نام‌خانوادگی"
                placeholder="نام و نام‌خانوادگی خود را وارد کنید"
                value={name}
                ref={focusRef}
                onChange={e => {
                  setName(e.target.value);
                }}
                id="name"
                required="required"
              />
              <Input
                required="required"
                type="text"
                label="ایمیل"
                placeholder="آدرس ایمیل خود را وارد کنید"
                value={email}
                id="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                required="required"
                type="text"
                label="شماره همراه"
                placeholder="شماره موبایل خود را وارد کنید"
                value={persianNumber(mobile)}
                onChange={e => {
                  setMobile(e.target.value);
                }}
                id="mobile"
              />
              <Input
                required="required"
                type="password"
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                id="password"
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
                onClick={() => setStep('login')}
                className="mt-1"
                title="ورود به کوله‌پشتی"
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
