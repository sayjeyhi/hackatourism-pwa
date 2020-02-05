if (process.env.SSR) {
  // eslint-disable-next-line global-require
  module.exports = require('../Helpers/serverCookieHelper');
} else {
  // eslint-disable-next-line global-require
  const helpers = require('@snappmarket/helpers');

  module.exports = {
    getCookie: helpers.getCookie,
    setCookie: helpers.setCookie,
  };
}
