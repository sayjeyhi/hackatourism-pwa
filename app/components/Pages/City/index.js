import React from 'react';
import { Container, Row, Col } from '@snappmarket/ui';

import Map from 'components/Common/Map';
import SeoHead from 'components/Common/Seo/SeoHead';
import WeatherWidget from 'components/Common/WeatherWidget';
import Comments from 'components/Common/Comments';
import { StyledCityPageWrapper, StyledCityNameWrapper } from './styles';

const City = () => (
  <>
    <SeoHead title="اطلاعات شهر" />
    <StyledCityPageWrapper>
      <Map
        searchForm={false}
        locationAccess={false}
        initialPosition={{
          lat: 35.1,
          lng: 31.2,
        }}
        isStatic
      />
      <StyledCityNameWrapper>همدان</StyledCityNameWrapper>

      <Container>
        <Row>
          <Col md={8}>
            <h3>رستوران‌ها</h3>
            <div>لیست رستوران‌ها</div>
          </Col>
          <Col md={4}>
            <h3>فاصله تا</h3>
            <ul>
              <li>
                تهران <span>320km</span>
              </li>
              <li>
                مشهد<span>320km</span>
              </li>
              <li>
                تبریز <span>320km</span>
              </li>
              <li>
                شیراز <span>320km</span>
              </li>
            </ul>

            <h3>وضعیت جوی فعلی</h3>
            <WeatherWidget weather_id={113646} />
          </Col>
        </Row>
      </Container>

      <div>
        <h3>از اینجا می‌تونی بری به</h3>
        <div className="bg-gray-bright">
          گراف شهرها
        </div>
      </div>

      <Comments />
    </StyledCityPageWrapper>
  </>
);

export default City;
