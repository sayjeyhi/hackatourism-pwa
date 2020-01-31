import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'AboutUs' */ './index'),
  loading: () => null,
});
