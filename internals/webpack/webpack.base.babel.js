const path = require('path');
const webpack = require('webpack');
const webpackAliases = require('./webpack.aliases');

const DEBUG_MODE = process.env.DEBUG_MODE || 'false';

module.exports = options => {
  if (DEBUG_MODE !== 'false') {
    // eslint-disable-next-line no-param-reassign
    options.plugins = [
      ...options.plugins,
      new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
        test: /\.(js|jsx|css)($|\?)/i,
        exclude: /vendor/,
      }),
    ];
  }

  return {
    mode: options.mode,
    entry: options.entry,
    devtool: options.devtool,
    target: 'web',
    performance: options.performance || {},
    optimization: options.optimization,
    node: {
      fs: 'empty',
    },
    output: {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
      ...options.output,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // Preprocess project styles
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          // Preprocess 3D party libraries styles
          test: /\.css$/,
          include: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: 'file-loader',
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                // Inline files smaller than 10 kB
                limit: 10 * 1024,
                noquotes: true,
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(mp4|webm)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        },
      ],
    },
    plugins: options.plugins.concat([
      new webpack.ProvidePlugin({
        // make fetch available
        fetch: 'exports-loader?self.fetch!whatwg-fetch',
      }),

      // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
      // inside your code for any environment checks; UglifyJS will automatically
      // drop any unreachable code.
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          CORE_API: JSON.stringify(process.env.CORE_API),
          MART_API: JSON.stringify(process.env.MART_API),
          PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
          DEBUG_MODE: JSON.stringify(process.env.DEBUG_MODE),
          SSR_APIS_TIMEOUT: JSON.stringify(process.env.SSR_APIS_TIMEOUT),
        },
      }),
    ]),
    ...webpackAliases,
  };
};
