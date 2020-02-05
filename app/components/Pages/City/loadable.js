import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'City' */ './index'),
  loading: () => null,
});
