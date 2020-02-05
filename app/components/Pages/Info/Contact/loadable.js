import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Contact' */ './index'),
  loading: () => null,
});
