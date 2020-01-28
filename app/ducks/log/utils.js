import {
  getCookie,
  getAgent,
  stringReplace,
  bulkStringReplace,
  getPathName,
  getWindowSize,
} from '@snappmarket/helpers';
import APP_INFO from 'constants/appInfo';
// import { getCookie } from '../../constants/Helpers/cookieHelper';
// import { getAgent } from '../../constants/Helpers/osHelpers';
// import {
//   stringReplace,
//   bulkStringReplace,
// } from '../../constants/Helpers/stringHelpers';
// import {
//   getPathName,
//   getWindowSize,
// } from '../../constants/Helpers/windowHelpers';

export default {
  normalizeLog: payload => {
    const {
      user,
      experiments,
      vendorId,
      ip,
      userAddress,
      log: { medium, detail, action, scenario = false },
    } = payload;

    const createdTime = new Date().getTime();
    const { height, width } = getWindowSize();
    const { userAgent, OSVersion } = getAgent();

    const source = getPathName(window.location.pathname);
    const UDID = getCookie('_log');
    const channel = localStorage.getItem('channel');

    const firstname = user ? user.firstname : 'N/A';
    const cellphone = user ? user.cellphone : 'N/A';
    const lastname = user ? user.lastname : 'N/A';
    const id = user ? user.id : 'N/A';
    const userMobile = stringReplace(' ', '', cellphone);

    const { lat = 'N/A', lng = 'N/A' } = userAddress;

    const testScenario =
      experiments && experiments[scenario] ? scenario : false;
    const testGroup =
      experiments && experiments[scenario] ? experiments[scenario] : false;

    const {
      CLIENT: client,
      STORE_NAME: storeName,
      APP_VERSION: appVersion,
      DEVICE_TYPE: deviceType,
    } = APP_INFO;
    let logString = '';
    const logBody = {
      vendorId,
      id,
      source,
      detail,
      medium,
      client,
      storeName,
      appVersion,
      deviceType,
      brand: false,
      UDID,
      OSVersion,
      ip,
      userAgent,
      width,
      height,
      userMobile,
      firstname,
      lastname,
      lat,
      lng,
      createdTime,
      testScenario,
      testGroup,
      channel,
    };
    const equivalentCharacters = { ',': '_', '?': '', '=': ':' };
    Object.keys(logBody).forEach(key => {
      logString += `,${key}="${encodeURI(
        logBody[key]
          ? bulkStringReplace(equivalentCharacters, logBody[key])
          : 'N/A',
      )}"`;
    });
    logString = `webLog${logString} action="${encodeURI(action)}"`;

    return logString;
  },
};
