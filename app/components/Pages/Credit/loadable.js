import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Credit' */ './index'),
  loading: () => null,
});
