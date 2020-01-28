import jwtDecode from 'jwt-decode';
import {
  getCookie,
  setCookie,
} from 'constants/ServerWrappers/cookieHelperWrapper';
import APP_INFO from 'constants/appInfo';

export const isTokenExpired = () => {
  const jwtToken = getJwtToken();
  const { exp: expire } = jwtDecode(jwtToken);
  const now = Math.round(new Date(Date.now()).getTime() / 1000);
  return now >= expire;
};
export const setJwtToken = (jwtToken, jwtRefreshToken) => {
  setCookie('jwtToken', jwtToken, 1);
  setCookie('jwtRefreshToken', jwtRefreshToken, 1);
  APP_INFO.JWT_TOKEN = jwtToken;
};
export const getJwtToken = () => APP_INFO.JWT_TOKEN || getCookie('jwtToken');
