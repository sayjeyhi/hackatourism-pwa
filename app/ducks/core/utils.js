import uuidv4 from 'uuid/v4';
import {
  getCookie,
  setCookie,
} from 'constants/ServerWrappers/cookieHelperWrapper';

export default {
  getUDID: () => {
    const tempValue = getCookie('UDID') || uuidv4();

    if (!tempValue && setCookie()) {
      setCookie('UDID', tempValue);
    }

    return tempValue;
  },
};
