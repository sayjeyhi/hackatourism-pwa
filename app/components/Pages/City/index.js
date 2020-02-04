import React from 'react';
import { Row, Col } from '@snappmarket/ui';

import { persianNumber } from '@snappmarket/helpers';
import SeoHead from 'components/Common/Seo/SeoHead';
import WeatherWidget from 'components/Common/WeatherWidget';
import Comments from 'components/Common/Comments';
import GlobeIcon from 'resources/svg/GlobeIcon';
import DistanceIcon from 'resources/svg/DistanceIcon';
import DiscountedTicket from 'resources/svg/DiscountedTicket';
import NearCitiesIcon from 'resources/svg/NearCitiesIcon';
import ReservedIcon from 'resources/svg/ReservedIcon';
import Footer from 'components/Common/Layout/partials/Footer';
import FullWidthMap from 'components/Common/FullWidthMap';

import PlaceWrapper from './partials/PlaceWrapper';
import CitiesStates from './partials/CitiesStates';
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
        <div className="align-center justify-center">
          <StyledCityNameWrapper>همدان</StyledCityNameWrapper>
        </div>

        <StyledDistancesContainer className="fixed">
          <Row>
            <Col md={8}>
              <h3>
                <DiscountedTicket />
                جاهای تخفیف‌دار{' '}
              </h3>
              <div className="justify-around pl-3" style={{ flexWrap: 'wrap' }}>
                <PlaceWrapper />
                <PlaceWrapper />
                <PlaceWrapper />
                <PlaceWrapper />
                <PlaceWrapper />
                <PlaceWrapper />
              </div>
            </Col>
            <Col md={4}>
              <h3>
                <DistanceIcon /> فاصله تا
              </h3>
              <ul className="distances">
                <li>
                  تهران <div>{persianNumber(320)}</div>
                </li>
                <li>
                  مشهد<div>{persianNumber(320)}</div>
                </li>
                <li>
                  تبریز <div>{persianNumber(320)}</div>
                </li>
                <li>
                  شیراز <div>{persianNumber(320)}</div>
                </li>
              </ul>

              <h3 className="mt-4"><ReservedIcon />برنامه‌ریزی سفر</h3>
              <div>

              </div>

              <h3 className="mt-4">
                <GlobeIcon /> وضعیت جوی فعلی
              </h3>
              <WeatherWidget weatherId={113646} />
            </Col>
          </Row>

          <Row className="flex-column">
            <h3>
              <NearCitiesIcon />
              از اینجا می‌تونی بری!
            </h3>
            <CitiesStates />
          </Row>
        </StyledDistancesContainer>

        <Comments className="mb-4" />
      </StyledCityPageWrapper>

      <div className="align-center justify-center mt-2 pb-2">
        <Footer />
      </div>
    </>
  );
};

export default City;
