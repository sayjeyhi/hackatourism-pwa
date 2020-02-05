import React from 'react';
import Loadable from 'react-loadable';
import Loading from './loading';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: 'WithMapForm' */ './FormContent.js'),
  loading: () => <Loading />,
});
