import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  sendLog(log) {
    const url = endpoints.LOG.WRITE_LOG();
    return universalCall({
      url,
      data: log,
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      allowedNoContent: true,
      mode: 'no-cors',
    });
  },
  getIp() {
    const url = endpoints.LOG.GET_IP();
    return universalCall({
      url,
      headers: {
        'Content-Type': 'text/plain',
      },
      mode: 'no-cors',
      allowedNoContent: false,
      timeout: 2000,
    });
  },
};
