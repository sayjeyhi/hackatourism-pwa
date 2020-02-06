import React from 'react';
import { Row, Col, Button } from '@snappmarket/ui';
import { persianNumber } from '@snappmarket/helpers';
import SeoHead from 'components/Common/Seo/SeoHead';
import PlusIcon from 'resources/svg/Icons/PlusIcon';
import Footer from 'components/Common/Layout/partials/Footer';
import FullWidthMap from 'components/Common/FullWidthMap';
import Comments from 'components/Common/Comments';

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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#0099ff"
                  fillOpacity="1"
                  d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,218.7C672,203,768,117,864,101.3C960,85,1056,139,1152,170.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>

              <div className="place-avatar">
                <img
                  src="https://www.gravatar.com/avatar/d08fcf59fd25c84ff92105e3d0747a7e?s=328&d=identicon&r=PG"
                  alt="user"
                />
              </div>

              <div className="sidebar-content align-center justify-center flex-column">
                <div className="place-name">{placeInfo.title}</div>
                <div className="place-joined justify-between">
                  <span>عضویت :</span>
                  <span>{persianNumber(placeInfo.register)}</span>
                </div>

                ‌
                <Button
                  color="blue"
                  className="follow-button"
                  icon={PlusIcon}
                  title="دنبال کردن"
                />
              </div>
              <Footer />
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
                mapZoom={17}
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
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد.
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
