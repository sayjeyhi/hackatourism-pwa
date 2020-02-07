import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'presentation' */ './index'),
  loading: () => null,
});
