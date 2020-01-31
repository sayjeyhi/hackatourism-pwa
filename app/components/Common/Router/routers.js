import React from 'react';

// Route loadable components
import Home from 'components/Pages/Home/loadable';

// Info pages
import AboutUs from 'components/Pages/Info/AboutUs/loadable';
import Faq from 'components/Pages/Info/Faq/loadable';
import Rules from 'components/Pages/Info/Rules/loadable';
import PrivacyPolicy from 'components/Pages/Info/PrivacyPolicy/loadable';

import Profile from 'components/Pages/Profile/loadable';
import Credit from 'components/Pages/Credit/loadable';
import Search from 'components/Pages/Search/loadable';
import AroundHere from 'components/Pages/AroundHere/loadable';
import SmartTip from 'components/Pages/SmartTrip/loadable';
import TripAdviser from 'components/Pages/TripAdviser/loadable';
import TripSchedule from 'components/Pages/TripSchedule/loadable';
import Weather from 'components/Pages/Weather/loadable';
import IntelligentAnalysis from 'components/Pages/IntelligentAnalysis/loadable';
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
      },
      {
        path: routes.info.privacyPolicy,
        exact: true,
        Component: <PrivacyPolicy />,
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
        path: routes.user.profile,
        exact: true,
        Component: <Profile />,
      },
      {
        path: routes.aroundHere,
        exact: true,
        Component: <AroundHere />,
      },
      {
        path: routes.smartTip,
        exact: true,
        Component: <SmartTip />,
      },
      {
        path: routes.tripAdvice,
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
    ],
  },
];

export default routers;
