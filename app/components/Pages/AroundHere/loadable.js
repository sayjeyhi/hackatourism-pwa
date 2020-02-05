import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'around-here' */ './index'),
  loading: () => null,
});
