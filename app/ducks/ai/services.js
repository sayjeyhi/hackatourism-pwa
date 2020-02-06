import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  getCitiesPath({ from, to }) {
    const url = endpoints.AI.GET_CITIES_PATH();
    return universalCall({
      url,
      data: {
        from,
        to,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
  },
  getFlightsPath({ from, to }) {
    const url = endpoints.AI.REGISTER();
    return universalCall({
      url,
      data: {
        from,
        to,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
  },
};
