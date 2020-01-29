import Loadable from 'react-loadable';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Intelligent-Analysis' */ './index'),
  loading: () => null,
});
