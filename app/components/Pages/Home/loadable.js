import Loadable from 'react-loadable';

const HomeLoadable = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './index'),
  loading: () => null,
});

export default HomeLoadable;
