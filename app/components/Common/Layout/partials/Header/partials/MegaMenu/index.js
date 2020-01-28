import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Row } from '@snappmarket/ui';
import { useDebounce } from '@snappmarket/hooks';

import generalMessages from 'constants/Messages/general.messages';

import routes from 'components/Common/Router/routes';
import ThIcon from 'resources/svg/Icons/ThIcon';
import { context as HeaderContext } from '../../context/headerContext';

import {
  StyledHeadMenu,
  StyledHeaderMenuContainer,
  StyledList,
  StyledMenuContent,
} from './styles';

const MegaMenu = props => {
  const { top } = props;
  const [menuOpen, setMenuOpen] = useState();
  const [spaceTop, setSpaceTop] = useState(top);
  const { setShowLightBox, setVisiblePanel, visiblePanel } = useContext(
    HeaderContext,
  );
  const [debouncedMenuOpen] = useDebounce(menuOpen, 300);

  useScrollPosition(
    ({ currPos, prevPos }) => {
      if (currPos.y > prevPos.y) {
        if (!menuOpen && !debouncedMenuOpen) {
          setSpaceTop(0);
        }
      } else {
        setSpaceTop(
          ['category', undefined, null, false].includes(visiblePanel) ? top : 0,
        );
      }
    },
    [spaceTop, setSpaceTop, menuOpen, debouncedMenuOpen],
    null,
    true,
    80,
  );

  useEffect(() => {
    setSpaceTop(
      ['category', undefined, null, false].includes(visiblePanel) ? top : 0,
    );
  }, [visiblePanel, top]);

  /**
   * show light box
   */
  useEffect(() => {
    setShowLightBox(debouncedMenuOpen);
    setVisiblePanel(debouncedMenuOpen && 'category');
  }, [debouncedMenuOpen]);

  /**
   * Show mega menu
   */
  const handleShowMegaMenu = () => {
    setMenuOpen(true);
  };

  /**
   * Hide mega menu
   */
  const handleCloseMegaMenu = () => {
    setMenuOpen(false);
  };

  // const handleCategoryClick = () => {
  //   forceMenuOpen(false);
  //   setVisiblePanel(null);
  // };

  return (
    <>
      <StyledHeadMenu className="align-center no-select" top={spaceTop}>
        <StyledHeaderMenuContainer className="fixed d-flex">
          <StyledList>
            <li
              className="bold"
              onMouseEnter={handleShowMegaMenu}
              onMouseLeave={handleCloseMegaMenu}
            >
              <ThIcon />
              {generalMessages.header.menu.categories}
            </li>
            <li>
              <NavLink to={routes.info.about}>
                {generalMessages.header.menu.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.info.faq.path}>
                {generalMessages.header.menu.faq}
              </NavLink>
            </li>
          </StyledList>
        </StyledHeaderMenuContainer>
      </StyledHeadMenu>
      <StyledMenuContent
        onMouseEnter={handleShowMegaMenu}
        onMouseLeave={handleCloseMegaMenu}
        className="fixed no-select"
        show={debouncedMenuOpen}
      >
        <Row>Category</Row>
      </StyledMenuContent>
    </>
  );
};

MegaMenu.propTypes = {
  top: PropTypes.number,
};

MegaMenu.fetchData = ({ getCategories }) => {
  getCategories();
};

export default MegaMenu;
