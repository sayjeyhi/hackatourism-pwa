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
import routes from 'components/Common/Router/routes';

import PlaceWrapper from './partials/PlaceWrapper';
import CitiesStates from './partials/CitiesStates';
import {
  StyledCityPageWrapper,
  StyledCityNameWrapper,
  StyledDistancesContainer,
  StyledReservationMenuItemNavLink,
} from './styles';

const City = () => {
  const cityInfo = {
    id: 12,
    title: 'همدان',
    lat: 35.7231273,
    lng: 51.3877295,
  };

  return (
    <>
      <SeoHead title={cityInfo.title} />
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
              <div className="section-part">
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
              </div>

              <div className="section-part">
                <h3 className="mt-4">
                  <NearCitiesIcon />
                  از {cityInfo.title} می‌تونی بری!
                </h3>
                <CitiesStates
                  className="ml-4 flex-row"
                  neighbors={{
                    1: {
                      title: 'شیراز',
                      id: 23,
                    },
                    2: {
                      title: 'شیراز',
                      id: 23,
                    },
                    3: {
                      title: 'شیراز',
                      id: 23,
                    },
                    4: {
                      title: 'شیراز',
                      id: 23,
                    },
                    5: {
                      title: 'شیراز',
                      id: 23,
                    },
                    6: {
                      title: 'شیراز',
                      id: 23,
                    },
                    7: {
                      title: 'شیراز',
                      id: 23,
                    },
                    8: {
                      title: 'شیراز',
                      id: 23,
                    },
                    9: {
                      title: 'شیراز',
                      id: 23,
                    },
                  }}
                  currentCity={{
                    title: 'شیراز',
                    id: 23,
                  }}
                />
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="section-part">
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
              </div>

              <div className="section-part">
                <h3 className="mt-4">
                  <ReservedIcon />
                  برنامه‌ریزی سفر
                </h3>
                <div className="flex-column align-center justify-center">
                  <StyledReservationMenuItemNavLink
                    to={`${routes.tripAdvice.path}/${cityInfo.id}`}
                  >
                    <div className="r-title">
                      صحبت با مشاور {cityInfo.title}
                    </div>
                  </StyledReservationMenuItemNavLink>
                  <StyledReservationMenuItemNavLink
                    to={`${routes.tripSchedule}/?name=سفر_${cityInfo.title}`}
                  >
                    <div className="r-title">
                      ایجاد برنامه سفر به {cityInfo.title}
                    </div>
                  </StyledReservationMenuItemNavLink>
                  <StyledReservationMenuItemNavLink
                    to={`${routes.smartTip}/?from=${cityInfo.id}`}
                  >
                    <div className="r-title">
                      سفر ترکیبی به {cityInfo.title}
                    </div>
                  </StyledReservationMenuItemNavLink>
                </div>
              </div>

              <div className="section-part">
                <h3 className="mt-4">
                  <GlobeIcon /> وضعیت جوی فعلی
                </h3>
                <div className=" align-center justify-center">
                  <WeatherWidget weatherId={113646} />
                </div>
              </div>
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
