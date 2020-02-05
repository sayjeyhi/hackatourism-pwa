import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Weather' */ './index'),
  loading: () => null,
});
