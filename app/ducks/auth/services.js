import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  loginMobileWithToken({ cellphone, code, client, deviceType, appVersion }) {
    const url = endpoints.AUTH.LOGIN_MOBILE_WITH_TOKEN();
    return universalCall({
      url,
      params: {
        cellphone,
        code,
        client,
        deviceType,
        appVersion,
      },
      method: 'post',
    });
  },
  loginMobileWithNoPass({ cellphone }) {
    const url = endpoints.AUTH.LOGIN_MOBILE_WITH_NO_PASS();
    return universalCall({
      url,
      params: {
        cellphone,
      },
      method: 'post',
    });
  },
  sendLoginToken({ cellphone }) {
    const url = endpoints.AUTH.SEND_LOGIN_TOKEN();
    return universalCall({
      url,
      params: {
        cellphone,
      },
      method: 'post',
    });
  },
  registerWithOptionalPass({
    code,
    cellphone,
    email,
    firstname,
    lastname,
    client,
    deviceType,
    appVersion,
  }) {
    const url = endpoints.AUTH.REGISTER_WITH_OPTIONAL_PASS();
    return universalCall({
      url,
      params: {
        code,
        cellphone,
        email,
        firstname,
        lastname,
        client,
        deviceType,
        appVersion,
      },
      method: 'post',
    });
  },
  refreshToken({ refreshToken }) {
    const url = endpoints.AUTH.REFRESH_TOKEN();
    return universalCall({
      url,
      method: 'POST',
      params: {
        refresh_token: refreshToken,
      },
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
