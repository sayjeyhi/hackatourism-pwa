import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'IntelligentAnalysis' */ './index'),
  loading: () => null,
});
