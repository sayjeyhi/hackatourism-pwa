import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';

import { useRouteChange } from '@snappmarket/hooks';

import theme from 'constants/theme';
import { serverContext } from 'constants/Contexts/serverContext';

import useToast from 'constants/Hooks/useToast';
import serverHelpers from 'constants/Helpers/serverHelpers';
import useServerContext from 'constants/Hooks/useServerContext';

import APP_INFO from 'constants/appInfo';
import Router from 'components/Common/Router';
import GlobalStyles from 'components/styles';
import MusicPlayer from '../MusicPlayer';

const Hoc = () => {
  const location = useLocation();
  const { isServer } = useServerContext(serverContext);

  useToast();
  useRouteChange(serverHelpers.forceHydrationFinish);
  APP_INFO.JWT_TOKEN = null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      {!isServer && <GlobalStyles />}
      <Router />
      <MusicPlayer />
    </ThemeProvider>
  );
};

export default Hoc;
