import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  login({ phone, password }) {
    const url = endpoints.AUTH.LOGIN();
    return universalCall({
      url,
      params: {
        phone,
        password,
      },
      method: 'post',
    });
  },
  register({ name, phone, email, password }) {
    const url = endpoints.AUTH.REGISTER();
    return universalCall({
      url,
      params: {
        name,
        phone,
        email,
        password,
      },
      method: 'post',
    });
  },
  logout() {
    const url = endpoints.AUTH.LOGOUT();
    return universalCall({
      url,
      method: 'GET',
      allowedNoContent: true,
    });
  },
};
