import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Profile' */ './index'),
  loading: () => null,
});
