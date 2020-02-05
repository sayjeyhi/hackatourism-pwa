import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'PrivacyPolicy' */ './index'),
  loading: () => null,
});
