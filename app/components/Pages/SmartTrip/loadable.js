import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'smart-trip' */ './index'),
  loading: () => null,
});
