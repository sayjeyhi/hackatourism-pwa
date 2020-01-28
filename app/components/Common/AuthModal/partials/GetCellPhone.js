import React, { useContext } from 'react';
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

import APP_INFO from 'constants/appInfo';

import { context as authContext } from '../context/authContext';
import { StyledTabContainer, StyledLocationContainer } from '../styles';

const GetCellPhone = props => {
  const { loginWithNoPass, loginWithNoPassStatus, isRegistered } = props;
  const { cellphone, setCellphone, setStep } = useContext(authContext);
  const focusRef = useFocus(null);

  const handleSendPhoneNumber = e => {
    e.preventDefault();
    const tempCellphone = englishNumber(cellphone);

    if (tempCellphone.length > 0) {
      setCellphone(tempCellphone);
      loginWithNoPass({
        cellphone: tempCellphone,
      });
    }
  };

  if (loginWithNoPassStatus === APP_INFO.API_STATUSES.SUCCESS) {
    setStep(isRegistered ? 'verification' : 'signUp');
  }

  const handleCellphoneChange = e => {
    if (e.target.value.length <= 11)
      setCellphone(e.target.value.replace(/[^0-9۰-۹]/g, ''));
    e.target.setCustomValidity('');
  };

  return (
    <>
      <StyledLocationContainer className="justify-center">
        <section className="popup-head">
          <h2>{userMessages.addMobileToSendMessage}</h2>
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
          <Row className="actions mt-1">
            <Col xs={12}>
              <Button
                size="md"
                disabled={
                  loginWithNoPassStatus === APP_INFO.API_STATUSES.REQUEST
                }
                title={userMessages.sendVerificationCode}
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

GetCellPhone.propTypes = {
  loginWithNoPass: PropTypes.func,
  loginWithNoPassStatus: PropTypes.string,
  isRegistered: PropTypes.bool,
};

const mapStateToProps = state => ({
  loginWithNoPassStatus: authSelectors.getLoginWithNoPassStatus(state),
  isRegistered: authSelectors.getIsRegistered(state),
});

export default connect(mapStateToProps, {
  loginWithNoPass: authActions.loginWithNoPassRequest,
})(GetCellPhone);
