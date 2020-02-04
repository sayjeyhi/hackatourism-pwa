import React from 'react';
import { Row, Col } from '@snappmarket/ui';

import Map from 'components/Common/Map';
import SeoHead from 'components/Common/Seo/SeoHead';
import WeatherWidget from 'components/Common/WeatherWidget';
import Comments from 'components/Common/Comments';
import GlobeIcon from 'resources/svg/GlobeIcon';
import DistanceIcon from 'resources/svg/DistanceIcon';
import DiscountedTicket from 'resources/svg/DiscountedTicket';
import Footer from 'components/Common/Layout/partials/Footer';
import FullWidthMap from 'components/Common/FullWidthMap';
import {
  StyledCityPageWrapper,
  StyledCityNameWrapper,
  StyledDistancesContainer,
} from './styles';

const City = () => {
  const cityInfo = {
    title: '',
    lat: 35.1,
    lng: 22.1,
  };

  return (
    <>
      <SeoHead title="اطلاعات شهر" />
      <StyledCityPageWrapper>
        <FullWidthMap
          searchForm={false}
          locationAccess={false}
          initialPosition={{
            lat: 35.1,
            lng: 31.2,
          }}
          isStatic
        />
        <StyledCityNameWrapper>همدان</StyledCityNameWrapper>

        <StyledDistancesContainer>
          <Row>
            <Col md={8}>
              <h3>
                <DiscountedTicket />
                جاهای تخفیف‌دار{' '}
              </h3>
              <div>لیست رستوران‌ها</div>
            </Col>
            <Col md={4}>
              <h3>
                <DistanceIcon /> فاصله تا
              </h3>
              <ul className="distances">
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

              <h3>
                <GlobeIcon /> وضعیت جوی فعلی
              </h3>
              <WeatherWidget weatherId={113646} />
            </Col>
          </Row>
        </StyledDistancesContainer>

        <div>
          <h3>از اینجا می‌تونی بری به</h3>
          <div className="bg-gray-bright">گراف شهرها</div>
        </div>

        <Comments />
      </StyledCityPageWrapper>

      <div className="align-center justify-center mt-2 pb-2">
        <Footer />
      </div>
    </>
  );
};

export default City;
