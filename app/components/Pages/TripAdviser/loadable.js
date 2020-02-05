import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'trip-adviser' */ './index'),
  loading: () => null,
});
