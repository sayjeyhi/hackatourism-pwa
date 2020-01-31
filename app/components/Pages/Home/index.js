import React from 'react';
import { Container, Row } from '@snappmarket/ui';
import { NavLink } from 'react-router-dom';

import SeoHead from 'components/Common/Seo/SeoHead';
import routes from 'components/Common/Router/routes';
import { StyledHomeItemsColumn, StyledInlineServices, StyledHomeSection } from './styles';

const Home = () => (
  <>
    <SeoHead title="خانه" />
    <Container>
      <Row>
        <StyledHomeItemsColumn md={6}>
          <NavLink to={routes.home}>براساس ایده</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={6}>
          <NavLink to={routes.aroundHere}>همین حوالی</NavLink>
        </StyledHomeItemsColumn>
      </Row>
      <Row>
        <StyledHomeItemsColumn md={4}>
          <NavLink to={routes.tripSchedule}>برنامه‌ریزی سفر</NavLink>
        </StyledHomeItemsColumn>

        <StyledHomeItemsColumn md={4}>
          <NavLink to={routes.weather.index}>هواشناسی</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink to={routes.smartTip}>سفر ترکیبی</NavLink>
        </StyledHomeItemsColumn>
      </Row>
      <Row>
        <StyledHomeItemsColumn md={4}>
          <NavLink to={routes.smartTicket}>بلیط هوشمند</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink to={routes.tripAdvice}>مشاوره سفر</NavLink>
        </StyledHomeItemsColumn>
        <StyledHomeItemsColumn md={4}>
          <NavLink to={routes.hotel}>هنل</NavLink>
        </StyledHomeItemsColumn>
      </Row>
    </Container>

    <StyledInlineServices>
      <a href="https://talks.koleposhti.app" target="_blank">
        گپ و گفت
      </a>
      <a href="https://blog.koleposhti.app" target="_blank">
        بلاگ
      </a>
      <a href="https://blog.koleposhti.app" target="_blank">
        تحلیل دیتا
      </a>
      <a href="https://blog.koleposhti.app" target="_blank">
        مستربلیط
      </a>
      <a href="https://snapp.app" target="_blank">
        اسنپ روم
      </a>
    </StyledInlineServices>

    <StyledHomeSection>
      <h2>
        شهرهای پرسفر
      </h2>
    </StyledHomeSection>

    <StyledHomeSection>
      <h2>
        رستوران‌های معروف
      </h2>
    </StyledHomeSection>

    <StyledHomeSection>
      <h2>
        مکان‌های پربازدید
      </h2>
    </StyledHomeSection>

    <StyledHomeSection>
      <h2>
        موسیقی سفر
      </h2>
    </StyledHomeSection>
  </>
);

export default Home;
