import React from 'react';
import PropType from 'prop-types';

import { Container, Row, Col } from '@snappmarket/ui';

import AuthModal from 'components/Common/AuthModal';
import Header from './partials/Header/index';
import Sidebar from './partials/Sidebar/index';
import { StyledLayout, StyledContentContainer } from './styles';

/**
 * Main layout
 * @note Keep it mind seo and head parameters will be added with HeadSeo component
 * @param children
 * @param type
 * @returns {*}
 * @constructor
 */
const Layout = ({ children, mode }) => (
  <StyledLayout>
    <Header mode={mode} />
    <AuthModal />

    {mode !== 'fullWidth' ? (
      <Container className="fixed">
        <Row>
          <Col md={8}>
            <StyledContentContainer className="fixed">
              {children}
            </StyledContentContainer>
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    ) : (
      <div>{children}</div>
    )}
  </StyledLayout>
);

Layout.propTypes = {
  children: PropType.node,
  mode: PropType.oneOf(['simple', 'advanced', 'fullWidth']),
};

export default Layout;
