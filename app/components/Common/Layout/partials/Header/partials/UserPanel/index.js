import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authActions, userSelectors } from 'ducks/index';

import routes from 'components/Common/Router/routes';

import UserIcon from 'resources/svg/Icons/UserIcon';
import ShoppingBasketIcon from 'resources/svg/Icons/ShoppingBasketIcon';
import CoinsIcon from 'resources/svg/Icons/CoinsIcon';
import LogoutIcon from 'resources/svg/Icons/LogoutIcon';
import generalMessages from 'constants/Messages/general.messages';
import { context as HeaderContext } from '../../context/headerContext';

import {
  StyledUserPanelHolder,
  StyledPanelList,
  StyledPanelTop,
} from './styles';

const UserPanel = ({ profile, logout, visible }) => {
  const { setVisiblePanel, setShowLightBox } = useContext(HeaderContext);
  const handleMenuItemClick = () => {
    setShowLightBox(false);
    setVisiblePanel(visible ? null : 'user');
  };

  const handleLogoutClick = () => {
    handleMenuItemClick();
    logout();
  };

  return (
    <StyledUserPanelHolder visible={visible}>
      <StyledPanelTop>
        <div>{`${profile.firstname} ${profile.lastname}`}</div>
        <div className="align-center">
          {generalMessages.header.userPanel.credit}: ۰ تومان
          {generalMessages.header.pricingUnit}
        </div>
      </StyledPanelTop>
      <StyledPanelList>
        <li>
          <NavLink
            onClick={handleMenuItemClick}
            className="b-none"
            to={routes.user.profile}
          >
            <UserIcon /> {generalMessages.header.userPanel.userAccount}
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleMenuItemClick} to={routes.user.credit}>
            <CoinsIcon />
            {generalMessages.header.userPanel.creditIncrease}
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleMenuItemClick} to={routes.user.schedules}>
            <ShoppingBasketIcon />
            لیست سفرها
          </NavLink>
        </li>
        <li>
          <button type="button" onClick={handleLogoutClick}>
            <LogoutIcon />
            {generalMessages.header.userPanel.exit}
          </button>
        </li>
      </StyledPanelList>
    </StyledUserPanelHolder>
  );
};

UserPanel.propTypes = {
  visible: PropTypes.bool,
  profile: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = state => ({
  profile: userSelectors.getProfile(state),
});

export default connect(mapStateToProps, {
  logout: authActions.logoutRequest,
})(UserPanel);
