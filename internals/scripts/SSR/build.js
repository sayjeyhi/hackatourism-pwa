/* eslint-disable no-console */
const chalk = require('chalk');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const {
  measureFileSizesBeforeBuild,
  printFileSizesAfterBuild,
} = require('react-dev-utils/FileSizeReporter');

const clientConfig = require('../../webpack/SSR/webpack.base.ssr');
const serverConfig = require('../../webpack/SSR/webpack.server.ssr');

process.on('unhandledRejection', err => {
  throw err;
});

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;
const BUILD_DIR = path.join(
  path.resolve(process.cwd(), 'build'),
  process.env.PUBLIC_URL,
);

const resolvePath = relativePath => path.resolve(__dirname, relativePath);

measureFileSizesBeforeBuild(BUILD_DIR)
  .then(previousFileSizes => {
    fs.emptyDirSync(BUILD_DIR);
    return build(previousFileSizes);
  })
  .then(
    result => printResult(result),
    err => {
      console.log(chalk.red('Failed to compile.\n'));
      console.log(`${err.message || err  }\n`);
      process.exit(1);
    },
  );

function build(previousFileSizes) {
  console.log(chalk.blue('\n\tCreating an optimized production build...\n'));

  const clientCompiler = webpack(clientConfig('production'));
  const serverCompiler = webpack(serverConfig);


  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    clientCompiler.run((err, clientStats) => {
      if (err || clientStats.hasErrors()) {
        return reject(err);
      }
      console.log(chalk.white('✓ Client webpack build complete'));


      // eslint-disable-next-line no-shadow,consistent-return
      serverCompiler.run((err, stats) => {
        if (err || stats.hasErrors()) {
          return reject(err);
        }
        console.log(chalk.white('✓ Server webpack build complete'));


        const messages = formatWebpackMessages(clientStats.toJson({}, true));

        if (messages.errors.length) {
          return reject(new Error(messages.errors.join('\n\n')));
        }


        resolve({
          stats: clientStats,
          previousFileSizes,
          warnings: messages.warnings,
        });
      });
    });
  });
}

function printResult({ stats, previousFileSizes, warnings }) {
  if (warnings.length) {
    console.log(chalk.yellow('Compiled with warnings.\n'));
    console.log(warnings.join('\n\n'));
  } else {
    console.log(chalk.green('Compiled successfully.\n'));
  }

  console.log('File sizes after gzip:\n');
  printFileSizesAfterBuild(
    stats,
    previousFileSizes,
    resolvePath(BUILD_DIR),
    WARN_AFTER_BUNDLE_GZIP_SIZE,
    WARN_AFTER_CHUNK_GZIP_SIZE,
  );
  console.log();
}
