import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { coreActions } from 'ducks';

import { useRouteChange } from '@snappmarket/hooks';

import theme from 'constants/theme';
import { serverContext } from 'constants/Contexts/serverContext';

import useToast from 'constants/Hooks/useToast';
import serverHelpers from 'constants/Helpers/serverHelpers';
import useServerContext from 'constants/Hooks/useServerContext';
import useServerEffect from 'constants/Hooks/useServerEffect';

import APP_INFO from 'constants/appInfo';
import Router from 'components/Common/Router';
import GlobalStyles from 'components/styles';

const Hoc = props => {
  const { initialize } = props;
  const { isServer } = useServerContext(serverContext);

  useToast();
  useRouteChange(serverHelpers.forceHydrationFinish);
  APP_INFO.JWT_TOKEN = null;

  useServerEffect(() => {
    initialize();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {!isServer && <GlobalStyles />}
      <Router />
    </ThemeProvider>
  );
};

Hoc.propTypes = {
  initialize: PropTypes.func,
};

Hoc.fetchData = ({ initialize }) => {
  initialize();
};

export default connect(null, {
  initialize: coreActions.initialize,
})(Hoc);
