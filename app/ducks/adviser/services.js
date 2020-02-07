import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  getAdvisers({ provinceId }) {
    const url = endpoints.VOIP.ADVISERS(provinceId);
    return universalCall({
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'get',
    });
  },
  doVoipCall({ adviser_id, phone }) {
    const url = endpoints.VOIP.CALL();
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
};
