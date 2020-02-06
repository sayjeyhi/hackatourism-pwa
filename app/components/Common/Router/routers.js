import React from 'react';

// Route loadable components
import Home from 'components/Pages/Home/loadable';

// Info pages
import AboutUs from 'components/Pages/Info/AboutUs/loadable';
import Faq from 'components/Pages/Info/Faq/loadable';
import Rules from 'components/Pages/Info/Rules/loadable';
import PrivacyPolicy from 'components/Pages/Info/PrivacyPolicy/loadable';
import WhyUs from 'components/Pages/Info/WhyUs/loadable';
import Pricing from 'components/Pages/Info/Pricing/loadable';
import Contact from 'components/Pages/Info/Contact/loadable';

import Credit from 'components/Pages/Credit/loadable';
import Search from 'components/Pages/Search/loadable';
import AroundHere from 'components/Pages/AroundHere/loadable';
import SmartTip from 'components/Pages/SmartTrip/loadable';
import SmartTicket from 'components/Pages/SmartTicket/loadable';
import TripAdviser from 'components/Pages/TripAdviser/loadable';
import TripSchedule from 'components/Pages/TripSchedule/loadable';
import Weather from 'components/Pages/Weather/loadable';
import Hotel from 'components/Pages/Hotel/loadable';
import IntelligentAnalysis from 'components/Pages/IntelligentAnalysis/loadable';

import Place from 'components/Pages/Place/loadable';
import Profile from 'components/Pages/Profile/loadable';
import City from 'components/Pages/City/index';
import routes from './routes';

const routers = [
  {
    path: routes.root,
    exact: false,
    layout: false,
    Component: [
      {
        path: routes.root,
        exact: true,
        Component: <Home />,
      },

      // info pages
      {
        path: routes.info.faq,
        exact: true,
        Component: <Faq />,
        layout: 'fullWidth',
      },
      {
        path: routes.info.about,
        exact: true,
        Component: <AboutUs />,
        layout: 'fullWidth',
      },
      {
        path: routes.info.rules,
        exact: true,
        Component: <Rules />,
        layout: 'fullWidth',
      },
      {
        path: routes.info.privacyPolicy,
        exact: true,
        Component: <PrivacyPolicy />,
        layout: 'fullWidth',
      },

      {
        path: routes.search.index,
        exact: false,
        Component: <Search />,
      },
      {
        path: routes.user.credit,
        exact: true,
        Component: <Credit />,
      },
      {
        path: routes.aroundHere,
        exact: true,
        Component: <AroundHere />,
        layout: 'fullWidth',
      },
      {
        path: routes.smartTip,
        exact: true,
        Component: <SmartTip />,
      },
      {
        path: routes.smartTicket,
        exact: true,
        Component: <SmartTicket />,
      },
      {
        path: routes.tripAdvice.index,
        exact: true,
        Component: <TripAdviser />,
      },
      {
        path: routes.weather.index,
        exact: true,
        Component: <Weather />,
      },
      {
        path: routes.ai,
        layout: 'fullWidth',
        exact: true,
        Component: <IntelligentAnalysis />,
      },
      {
        path: routes.tripSchedule,
        layout: 'fullWidth',
        exact: true,
        Component: <TripSchedule />,
      },
      {
        path: routes.hotel,
        exact: true,
        Component: <Hotel />,
      },
      {
        path: routes.city.index,
        exact: true,
        layout: 'fullWidth',
        Component: <City />,
      },
      {
        path: routes.profile.index,
        layout: 'fullWidth',
        exact: true,
        Component: <Profile />,
      },
      {
        path: routes.place.index,
        layout: 'fullWidth',
        exact: true,
        Component: <Place />,
      },
      {
        path: routes.info.whyUs,
        layout: 'fullWidth',
        exact: true,
        Component: <WhyUs />,
      },
      {
        path: routes.info.pricing,
        layout: 'fullWidth',
        exact: true,
        Component: <Pricing />,
      },
      {
        path: routes.info.contact,
        layout: 'fullWidth',
        exact: true,
        Component: <Contact />,
      },
    ],
  },
];

export default routers;
