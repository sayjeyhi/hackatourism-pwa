/* eslint-disable no-console */
const express = require('express');
const chalk = require('chalk');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");


const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const {
  choosePort,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

const webpackConfig = require("../../webpack/SSR/webpack.base.ssr")('development');
const webpackConfigSSR = require("../../webpack/SSR/webpack.server.ssr");

process.env.IS_SERVER = true;

//
// require('@babel/register')({
//   plugins: [
//     "react-loadable/babel",
//     "@babel/plugin-transform-runtime",
//     "@babel/plugin-proposal-class-properties",
//     "@babel/plugin-syntax-dynamic-import",
//     "@babel/plugin-proposal-export-default-from",
//     [
//       'css-modules-transform',
//       {
//         camelCase: true,
//         extensions: ['.css', '.scss'],
//         generateScopedName: '[hash:base64]',
//       },
//     ],
//     'dynamic-import-node',
//     [
//       "file-loader",
//       {
//         "name": "[hash].[ext]",
//         "extensions": ["png", "jpg", "jpeg", "gif", "svg"],
//         "publicPath": "/",
//         "outputPath": "/",
//         "context": "",
//         "limit": 0,
//       },
//     ],
//     [ "babel-plugin-webpack-alias-7", { "config": path.resolve(process.cwd(), 'internals/webpack/webpack.aliases.js') } ],
//   ],
// });


const compiler = webpack(webpackConfig);
const compilerServer = webpack(webpackConfigSSR);


process.on('unhandledRejection', err => {
  throw err;
});

const BUILD_DIR = path.join(
  path.resolve(process.cwd(), 'build'),
  process.env.PUBLIC_URL,
);
const DEFAULT_PORT = process.env.PORT || 4000;
const isInteractive = process.stdout.isTTY;
const HOST = process.env.HOST || '0.0.0.0';

// eslint-disable-next-line consistent-return
compilerServer.run((err, stats) => {
  if (err || stats.hasErrors()) {
    throw new Error(err);
  }
  const server = express();


  server.use(
    webpackDevMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      progress: true,
      stats: {
        colors: true,
        assets: true,
        chunks: false,
        modules: false,
        hash: false,
      },
    }),
  );

  server.use(
    webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr',
      heartbeat: 4000,
    }),
  );

  server.use((req, res) => {
    // eslint-disable-next-line global-require
    const { app } = require(`${BUILD_DIR}\\server`);
    app(req, res);
  });



  choosePort(HOST, DEFAULT_PORT).then(port => {
    if (!port) {
      throw new Error('Could not get port');
    }

    const urls = prepareUrls('http', HOST, port);

    // eslint-disable-next-line consistent-return,no-shadow
    server.listen(port, HOST, err => {
      if (err) {
        return console.log(err);
      }

      if (isInteractive) {
        clearConsole();
      }

      console.log(chalk.white('\n\tStarting dev server...'));

      openBrowser(urls.localUrlForBrowser);

      console.log(
        chalk.blue(`
        Running locally at ${urls.localUrlForBrowser}
        Running on your network at ${urls.lanUrlForConfig}:${port}
      `),
      );
    });
  });
});
