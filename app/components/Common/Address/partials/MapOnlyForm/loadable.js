import React from 'react';
import Loadable from 'react-loadable';
import AddressFormLoading from './loading';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: 'MapOnlyFormContent' */ './FormContent.js'),
  loading: () => <AddressFormLoading />,
});
