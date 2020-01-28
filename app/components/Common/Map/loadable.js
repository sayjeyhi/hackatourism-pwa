import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'map' */ './index'),
  loading: () => null,
});
