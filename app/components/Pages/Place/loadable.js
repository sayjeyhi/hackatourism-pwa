import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'place' */ './index'),
  loading: () => null,
});
