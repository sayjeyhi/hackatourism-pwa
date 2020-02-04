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
import TalkToAdvicerIcon from 'resources/svg/TalkToAdvicerIcon';
import ScheduleIcon from 'resources/svg/ScheduleIcon';
import Footer from 'components/Common/Layout/partials/Footer';
import FullWidthMap from 'components/Common/FullWidthMap';

import PlaceWrapper from './partials/PlaceWrapper';
import CitiesStates from './partials/CitiesStates';
import {
  StyledCityPageWrapper,
  StyledCityNameWrapper,
  StyledDistancesContainer,
  StyledReservationMenuItem,
} from './styles';

const City = () => {
  const cityInfo = {
    title: 'همدان',
    lat: 35.7231273,
    lng: 51.3877295,
  };

  return (
    <>
      <SeoHead title="اطلاعات شهر" />
      <StyledCityPageWrapper>
        <FullWidthMap
          searchForm={false}
          locationAccess={false}
          initialPosition={{
            lat: cityInfo.lat,
            lng: cityInfo.lng,
          }}
          mapZoom={10}
          isStatic
        />
        <div className="align-center justify-center">
          <StyledCityNameWrapper>{cityInfo.title}</StyledCityNameWrapper>
        </div>

        <StyledDistancesContainer className="fixed pb-4">
          <Row>
            <Col md={8} sm={12}>
              <h3>
                <DiscountedTicket />
                جاهای تخفیف‌دار{' '}
              </h3>
              <div
                className="justify-around pl-4 mb-2"
                style={{ flexWrap: 'wrap' }}
              >
                <PlaceWrapper name="رستوران محمدی" id={2} />
                <PlaceWrapper name="رستوران محمدی" id={2} />
                <PlaceWrapper name="رستوران محمدی" id={2} />
                <PlaceWrapper name="رستوران محمدی" id={2} />
                <PlaceWrapper name="رستوران محمدی" id={2} />
                <PlaceWrapper name="رستوران محمدی" id={2} />
              </div>

              <h3 className="mt-4">
                <NearCitiesIcon />
                از {cityInfo.title} می‌تونی بری!
              </h3>
              <CitiesStates />
            </Col>

            <Col md={4} sm={12}>
              <h3>
                <DistanceIcon /> فاصله تا
              </h3>
              <ul className="distances mb-2">
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

              <h3 className="mt-4">
                <ReservedIcon />
                برنامه‌ریزی سفر
              </h3>
              <div className="flex-row justify-around">
                <StyledReservationMenuItem>
                  <TalkToAdvicerIcon />
                  <div className="r-title">صحبت با مشاور {cityInfo.title}</div>
                </StyledReservationMenuItem>
                <StyledReservationMenuItem>
                  <ScheduleIcon />
                  <div className="r-title"> ایجاد برنامه سفر به {cityInfo.title}</div>
                </StyledReservationMenuItem>
                <StyledReservationMenuItem>
                  <TalkToAdvicerIcon />
                  <div className="r-title">صحبت با مشاور {cityInfo.title}</div>
                </StyledReservationMenuItem>
              </div>

              <h3 className="mt-4">
                <GlobeIcon /> وضعیت جوی فعلی
              </h3>
              <WeatherWidget weatherId={113646} />
            </Col>
          </Row>
        </StyledDistancesContainer>

        <Comments className="mb-4" />
      </StyledCityPageWrapper>

      <div className="align-center justify-center mt-4 pb-2">
        <Footer />
      </div>
    </>
  );
};

export default City;
