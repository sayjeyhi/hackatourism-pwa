import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Rules' */ './index'),
  loading: () => null,
});
