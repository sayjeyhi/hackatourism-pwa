import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  getCities() {
    const url = endpoints.CITY.GET_MULTI();
    return universalCall({
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'get',
    });
  },
  getProvices({ adviser_id, phone }) {
    const url = endpoints.CITY.GET_TOP_CITIES()
    return universalCall({
      url,
      data: {
        adviser_id,
        phone,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  },
  getCityPage({ id }) {
    const url = endpoints.CITY.GET_CITY_PAGE(id);
    return universalCall({
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
  },
};
