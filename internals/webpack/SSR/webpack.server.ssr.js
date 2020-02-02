const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const baseSSR = require('./webpack.base.ssr');

const SERVER_DIR = path.resolve(process.cwd(), 'server');
const BUILD_DIR = path.join(
  path.resolve(process.cwd(), 'build'),
  process.env.PUBLIC_URL,
);

const IS_PROD = process.env.NODE_ENV === 'production';

const configObj = {
  ...baseSSR(),
  target: 'node',
  entry: [`${SERVER_DIR}/SSR/server.js`],
  output: {
    path: `${BUILD_DIR}/server`,
    filename: 'index.js',
    publicPath: IS_PROD ? `/${process.env.PUBLIC_URL}/` : '/',
    library: 'app',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              onlyLocals: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: 'file-loader?emitFile=false',
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: ['file-loader?name=images/[name].[hash].[ext]'],
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?emitFile=false',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CORE_API: JSON.stringify(process.env.CORE_API),
        MART_API: JSON.stringify(process.env.MART_API),
        PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
        DEBUG_MODE: JSON.stringify(process.env.DEBUG_MODE),
        SSR_APIS_TIMEOUT: JSON.stringify(process.env.SSR_APIS_TIMEOUT),
        SSR: true,
      },
    }),
  ],
  node: {
    __dirname: true,
  },
  optimization: {},
  externals: [nodeExternals()],
};

module.exports = configObj;
