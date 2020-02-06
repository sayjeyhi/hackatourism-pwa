import React from 'react';
import { Container, Row } from '@snappmarket/ui';
import { NavLink } from 'react-router-dom';

import {
  AdviserIcon,
  NearByIcon,
  ScheduleIcon,
  SmartTripIcon,
  WeatherIcon,
} from 'resources/svg/HomeIcons';

import SeoHead from 'components/Common/Seo/SeoHead';
import routes from 'components/Common/Router/routes';

import Section from './partials/HomeSection';
import TopCities from './partials/TopCities';
import Places from './partials/Places';
import Musics from './partials/Musics';

import { StyledInlineServices, StyledHomeSection } from './styles';

const Home = () => (
  <div className="no-select pb-4">
    <SeoHead title="خانه" />
    <Container>
      <Row>
        <Section
          className="half-section aa align-center justify-between"
          icon={ScheduleIcon}
          md={6}
          route={routes.tripSchedule}
          title=" برنامه‌ریزی سفر"
          description="کل زمان سفر رو استفاده کن"
        />
        <Section
          className="half-section bb align-center justify-between"
          icon={NearByIcon}
          md={6}
          route={routes.aroundHere}
          title=" همین حوالی"
          description="نزدیکای من چه خبرا هست؟"
        />
      </Row>
      <Row>
        <Section
          className="align-center"
          icon={AdviserIcon}
          md={4}
          route={routes.tripAdvice.path}
          title="مشاوره در لحظه"
        />
        <Section
          className="align-center"
          icon={SmartTripIcon}
          md={4}
          route={routes.smartTip}
          title="سفر ترکیبی"
        />
        <Section
          className="align-center"
          icon={WeatherIcon}
          md={4}
          route={routes.weather.path}
          title="هواشناسی"
        />
      </Row>
    </Container>

    <StyledInlineServices>
      <div>
        <a
          className="align-center justify-center"
          href="https://talks.koleposhti.app"
          target="_blank"
        >
          <span>گپ و گفت</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,133.3C672,117,768,75,864,64C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </a>
        <a
          className="align-center justify-center"
          href="https://blog.koleposhti.app"
          target="_blank"
        >
          <span>بلاگ</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,64L48,53.3C96,43,192,21,288,10.7C384,0,480,0,576,37.3C672,75,768,149,864,154.7C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </a>
        <NavLink to={routes.smartTip} className="align-center justify-center">
          <span>بلیط هوشمند</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,176C672,171,768,85,864,85.3C960,85,1056,171,1152,197.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </NavLink>
        <NavLink
          className="align-center justify-center"
          to={routes.info.contact}
        >
          <span>تماس با ما</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,288L48,256C96,224,192,160,288,133.3C384,107,480,117,576,112C672,107,768,85,864,80C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </NavLink>
      </div>
    </StyledInlineServices>

    <StyledHomeSection>
      <div className="title-holder no-border">
        <h2>شهرهای پرسفر</h2>
      </div>
      <TopCities />
    </StyledHomeSection>

    <StyledHomeSection>
      <div className="title-holder no-border">
        <h2>مکان‌های معروف</h2>
      </div>
      <Places />
    </StyledHomeSection>

    <StyledHomeSection>
      <div className="title-holder no-border">
        <h2>موسیقی سفر</h2>
      </div>
      <Musics />
    </StyledHomeSection>
  </div>
);

export default Home;
