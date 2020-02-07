import React from 'react';
import { Row, Col, Button } from '@snappmarket/ui';
import { persianNumber } from '@snappmarket/helpers';
import SeoHead from 'components/Common/Seo/SeoHead';
import PlusIcon from 'resources/svg/Icons/PlusIcon';
import Footer from 'components/Common/Layout/partials/Footer';
import FullWidthMap from 'components/Common/FullWidthMap';
import Comments from 'components/Common/Comments';
import Stars from 'components/Common/Stars';

import bizImage from 'resources/img/bizPage.jpg';

import {
  StyledProfileWrapper,
  StyledProfileSidebar,
  StyledProfileContent,
} from './styles';

const Place = () => {
  const placeInfo = {
    title: 'فروشگاه برادران محمدی',
    lat: 35.7231273,
    lng: 51.3877295,
    register: '۱۳۹۸/۱۱/۱۴',
  };

  return (
    <>
      <SeoHead title="صفحه محل" />
      <StyledProfileWrapper>
        <Row>
          <Col md={4}>
            <StyledProfileSidebar>
              <div className="align-center content-holder">
                <div className="top-wallpaper" />

                <svg
                  className="waved-bg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#0099ff"
                    fillOpacity="1"
                    d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,122.7C672,96,768,128,864,122.7C960,117,1056,75,1152,90.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  />
                </svg>

                <div className="place-avatar">
                  <img src={bizImage} alt="user" />
                </div>

                <div className="sidebar-content align-center justify-center flex-column">
                  <div className="place-name">{placeInfo.title}</div>
                  <div className="place-joined justify-between">
                    <span>عضویت :</span>
                    <span>{persianNumber(placeInfo.register)}</span>
                  </div>

                  <Stars />

                  <Button
                    color="blue"
                    className="follow-button"
                    icon={PlusIcon}
                    title="دنبال کردن"
                  />
                </div>
              </div>
              <Footer className="footer-in-aside" />
            </StyledProfileSidebar>
          </Col>
          <Col md={8}>
            <StyledProfileContent>
              <FullWidthMap
                className="pb-4"
                searchForm={false}
                locationAccess={false}
                initialPosition={{
                  lat: placeInfo.lat,
                  lng: placeInfo.lng,
                }}
                mapZoom={16}
                isStatic
              />
              <div
                className="mb-4 text-medium text-justify bg-white p-3"
                style={{
                  borderRadius: '8px',
                  lineHeight: '26px',
                  width: '90%',
                  marginRight: '5%',
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </div>
              <div className="mb-4 d-flex" />
              <Comments className="pb-4" />
            </StyledProfileContent>
          </Col>
        </Row>
      </StyledProfileWrapper>
    </>
  );
};

export default Place;
