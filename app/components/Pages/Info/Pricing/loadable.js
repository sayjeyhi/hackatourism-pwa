import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'pricing' */ './index'),
  loading: () => null,
});
