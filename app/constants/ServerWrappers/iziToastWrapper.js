if (process.env.SSR) {
  module.exports = f => f; // Or something, it's not going to be used anyway
} else {
  // eslint-disable-next-line global-require
  module.exports = require('izitoast-react');
}
