import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Faq' */ './index'),
  loading: () => null,
});
