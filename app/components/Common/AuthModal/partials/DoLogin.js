import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authActions, authSelectors } from 'ducks';
import userMessages from 'constants/Messages/user.messages';

import { Input, Button, Col, Row } from '@snappmarket/ui';
import {
  cellphoneValidate,
  englishNumber,
  persianNumber,
} from '@snappmarket/helpers';

import { useFocus } from '@snappmarket/hooks';

import useApiStatus from 'constants/Hooks/useApiStatus';
import APP_INFO from 'constants/appInfo';

import { context as authContext } from '../context/authContext';
import { StyledTabContainer, StyledLocationContainer } from '../styles';

const DoLogin = props => {
  const { login, isRegistered } = props;
  const [loginStatus] = useApiStatus(login);
  const [password, setPassword] = useState('');
  const { cellphone, setCellphone, setStep } = useContext(authContext);
  const focusRef = useFocus(null);

  const handleSendPhoneNumber = e => {
    e.preventDefault();
    const tempCellphone = englishNumber(cellphone);
    const tempPassword = englishNumber(password);

    if (tempCellphone.length > 0) {
      setCellphone(tempCellphone);
      login({
        phone: tempCellphone,
        password: tempPassword,
      });
    }
  };

  if (loginStatus === APP_INFO.API_STATUSES.SUCCESS) {
    setStep(isRegistered ? 'verification' : 'signUp');
  }

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleCellphoneChange = e => {
    if (e.target.value.length <= 11)
      setCellphone(e.target.value.replace(/[^0-9۰-۹]/g, ''));
    e.target.setCustomValidity('');
  };

  return (
    <>
      <StyledLocationContainer className="justify-center">
        <section className="popup-head">
          <h2>برای ورود اطلاعات کاربری خود را وارد کنید</h2>
        </section>
      </StyledLocationContainer>
      <form className="justify-center" onSubmit={handleSendPhoneNumber}>
        <StyledTabContainer>
          <Row>
            <Col xs={12}>
              <Input
                pattern={cellphoneValidate()}
                type="text"
                maxlength="11"
                label={userMessages.cellphone}
                placeholder={userMessages.cellphonePlaceholder}
                value={persianNumber(cellphone)}
                ref={focusRef}
                onChange={handleCellphoneChange}
                onInvalid={e => {
                  e.target.setCustomValidity(
                    userMessages.cellphoneInvalidPattern,
                  );
                }}
                id="cellphone"
                required="required"
                autoFocus
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Input
                type="text"
                maxlength="11"
                label="رمز عبور"
                placeholder="رمز عبور"
                value={password}
                onChange={handleChangePassword}
                id="cellphone"
                required="required"
                minLength={6}
                autoFocus
              />
            </Col>
          </Row>
          <Row className="actions mt-1">
            <Col xs={12}>
              <Button
                size="md"
                disabled={loginStatus === APP_INFO.API_STATUSES.REQUEST}
                title="ورود به کوله‌پشتی"
                primary
                fullWidth
              />
            </Col>
            <Col xs={12}>
              <Button
                onClick={() => setStep('signUp')}
                size="md"
                modifier="link"
                title="ثبت‌نام کاربر"
                primary
                fullWidth
              />
            </Col>
          </Row>
        </StyledTabContainer>
      </form>
    </>
  );
};

DoLogin.propTypes = {
  login: PropTypes.func,
  isRegistered: PropTypes.bool,
};

const mapStateToProps = state => ({
  isRegistered: authSelectors.getIsRegistered(state),
});

export default connect(mapStateToProps, {
  login: authActions.loginRequest,
})(DoLogin);
