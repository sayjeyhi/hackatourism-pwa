import Loadable from 'react-loadable';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: 'TripSchedule' */ './index'),
  loading: () => null,
});
