import React from 'react';

// Route loadable components
import Home from 'components/Pages/Home/loadable';
import AboutUs from 'components/Pages/AboutUs/loadable';
import Faq from 'components/Pages/Faq/loadable';
import Rules from 'components/Pages/Rules/loadable';
import Profile from 'components/Pages/Profile/loadable';
import Credit from 'components/Pages/Credit/loadable';
import Search from 'components/Pages/Search/loadable';
import AroundHere from 'components/Pages/AroundHere/loadable';
import SmartTip from 'components/Pages/SmartTrip/loadable';
import TripAdviser from 'components/Pages/TripAdviser/loadable';
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
        path: routes.info.faq.index,
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
        path: routes.ai,
        layout: 'fullWidth',
        exact: true,
        Component: <IntelligentAnalysis />,
      },
    ],
  },
];

export default routers;
