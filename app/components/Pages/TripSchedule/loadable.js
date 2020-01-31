import React from 'react';
import Loadable from 'react-loadable';
import ScheduleLoading from './loading/schedule.loading';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: 'TripSchedule' */ './index'),
  loading: () => <ScheduleLoading />,
});
