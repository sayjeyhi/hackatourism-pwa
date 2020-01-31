import React from 'react';
import { Container, Row } from '@snappmarket/ui';
import { NavLink } from 'react-router-dom';

import SeoHead from 'components/Common/Seo/SeoHead';
import routes from 'components/Common/Router/routes';
import { StyledHomeItemsColumn } from './styles';

const Home = () => (
  <>
    <SeoHead title="خانه" />
    <Container>
      <Row>
        <StyledHomeItemsColumn as={NavLink} to={routes.home} md={4}>
          براساس ایده
        </StyledHomeItemsColumn>

        <StyledHomeItemsColumn as={NavLink} to={routes.smartTip} md={4}>
          سفرهوشمند
        </StyledHomeItemsColumn>

        <StyledHomeItemsColumn as={NavLink} to={routes.aroundHere} md={4}>
          همین حوالی
        </StyledHomeItemsColumn>
      </Row>
      <Row>
        <StyledHomeItemsColumn as={NavLink} to={routes.smartTicket} md={4}>
          بلیط هوشمند
        </StyledHomeItemsColumn>

        <StyledHomeItemsColumn as={NavLink} to={routes.home} md={4}>
          هتل ارزان
        </StyledHomeItemsColumn>

        <StyledHomeItemsColumn as={NavLink} to={routes.ai} md={4}>
          تحلیل هوشمند
        </StyledHomeItemsColumn>
      </Row>
      <Row>
        <StyledHomeItemsColumn as={NavLink} to={routes.tripAdvice} md={4}>
          مشاوره سفر
        </StyledHomeItemsColumn>

        <StyledHomeItemsColumn as={NavLink} to={routes.weather.index} md={4}>
          آب و هوا
        </StyledHomeItemsColumn>

        <StyledHomeItemsColumn
          href="https://talks.koleposhti.app"
          target="_blank"
          as="a"
          md={4}
        >
          گپ و گفت
        </StyledHomeItemsColumn>
      </Row>
    </Container>
  </>
);

export default Home;
