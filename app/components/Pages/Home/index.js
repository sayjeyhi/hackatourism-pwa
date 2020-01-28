import React from 'react';
import { Container, Row } from '@snappmarket/ui';
import { NavLink } from 'react-router-dom';

import SeoHead from 'components/Common/Seo/SeoHead';
import { StyledHomeItemsColumn } from './styles';

const Home = () => (
  <>
    <SeoHead title="خانه" />
    <Container>
      <Row>
        <StyledHomeItemsColumn md={4}>
          <NavLink>براساس ایده</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink>سفرهوشمند</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink>همین حوالی</NavLink>
        </StyledHomeItemsColumn>
      </Row>
      <Row>
        <StyledHomeItemsColumn md={4}>
          <NavLink>بلیط هوشمند</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink>هتل ارزان</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink>تحلیل هوشمند</NavLink>
        </StyledHomeItemsColumn>
      </Row>
      <Row>
        <StyledHomeItemsColumn md={4}>
          <NavLink>مشاوره سفر</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink>بلاگ</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink>انجمن</NavLink>
        </StyledHomeItemsColumn>
      </Row>
    </Container>
  </>
);

export default Home;
