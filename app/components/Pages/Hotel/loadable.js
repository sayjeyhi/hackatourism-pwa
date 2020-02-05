import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'hotel' */ './index'),
  loading: () => null,
});
