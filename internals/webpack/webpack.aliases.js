const path = require('path');

module.exports = {
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      ducks: path.resolve(process.cwd(), 'app/ducks'),
      components: path.resolve(process.cwd(), 'app/components'),
      constants: path.resolve(process.cwd(), 'app/constants'),
      resources: path.resolve(process.cwd(), 'app/resources'),
    },
  },
};
