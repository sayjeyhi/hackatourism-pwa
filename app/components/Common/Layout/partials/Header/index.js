import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Icon } from '@snappmarket/ui';
import routes from 'components/Common/Router/routes';

import KoleposhtiLogo from 'resources/svg/KoleposhtiLogo';
import UserIcon from 'resources/svg/Icons/UserIcon';
import generalMessages from 'constants/Messages/general.messages';

import APP_INFO from 'constants/appInfo';
import { authActions, userSelectors } from 'ducks';

import { HeaderProvider } from './context/headerContext';
import SearchBar from './partials/SearchBar';
import UserPanel from './partials/UserPanel';

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderRightSide,
  StyledHeaderProfile,
  StyledHeaderLeftSide,
  StyledHeadSpace,
  StyledUserBtn,
  StyledLightBox,
} from './styles';

const Header = props => {
  const { isLoggedIn, showAuthModal } = props;
  const [visiblePanel, setVisiblePanel] = useState(null);
  const [showLightBox, setShowLightBox] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);

  const handleToggleUserPanelMenu = () => {
    setVisiblePanel(visiblePanel === 'user' ? null : 'user');
    setShowLightBox(visiblePanel !== 'user');
  };

  const handleOpenAuthModal = () => {
    handleCloseEveryThing();
    showAuthModal();
  };

  const handleCloseEveryThing = () => {
    setAutoOpen(false);
    setShowLightBox(false);
    setVisiblePanel(null);
  };

  return (
    <HeaderProvider
      value={{
        visiblePanel,
        setShowLightBox,
        setVisiblePanel,
        autoOpen,
        setAutoOpen,
      }}
    >
      <StyledHeadSpace />
      <StyledLightBox onClick={handleCloseEveryThing} show={showLightBox} />
      <StyledHeader className="align-center no-select" height={7} fixed>
        <StyledHeaderContainer className="fixed d-flex">
          <StyledHeaderRightSide className="align-center">
            <NavLink
              onClick={handleCloseEveryThing}
              title={APP_INFO.NAME}
              to={routes.home}
            >
              <KoleposhtiLogo />
              کوله‌پشتی
            </NavLink>
          </StyledHeaderRightSide>

          <SearchBar showSearchResult={visiblePanel === 'search'} />
          <StyledHeaderLeftSide className="align-center">
            <StyledHeaderProfile className="align-center">
              {isLoggedIn ? (
                <>
                  <StyledUserBtn
                    size="sm"
                    modifier="link"
                    type="button"
                    color="gray"
                    icon={<UserIcon className="ml-1" />}
                    onClick={handleToggleUserPanelMenu}
                    title={<Icon name="angle-down" />}
                  />
                  <UserPanel visible={visiblePanel === 'user'} />
                </>
              ) : (
                <StyledUserBtn
                  size="sm"
                  modifier="link"
                  type="button"
                  color="gray"
                  icon={<UserIcon className="ml-1" />}
                  onClick={handleOpenAuthModal}
                  title={generalMessages.header.loginOrRegister}
                />
              )}
            </StyledHeaderProfile>
          </StyledHeaderLeftSide>
        </StyledHeaderContainer>
      </StyledHeader>
    </HeaderProvider>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  showAuthModal: PropTypes.func,
};

const mapStateToProps = state => ({
  isLoggedIn: userSelectors.getLoggedInStatus(state),
});

export default connect(mapStateToProps, {
  showAuthModal: authActions.showAuthModal,
})(Header);
