import { getCookie, universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  login({ phone, password }) {
    const url = endpoints.AUTH.LOGIN();
    return universalCall({
      url,
      data: {
        phone,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
  },
  register({ name, phone, email, password }) {
    const url = endpoints.AUTH.REGISTER();
    return universalCall({
      url,
      data: {
        name,
        phone,
        email,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
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
      jwtToken: getCookie('jwtToken'),
    });
  },
};
