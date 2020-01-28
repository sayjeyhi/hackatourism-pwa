const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

const APP_DIR = path.resolve('app');

module.exports = require('./webpack.base.babel')({
  mode: 'production',
  entry: `${APP_DIR}/app.js`,
  devtool: '',
  output: {
    filename: '[name][chunkhash].js',
    chunkFilename: '[name][chunkhash].chunk.js',
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    splitChunks: { chunks: 'all' },
    runtimeChunk: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${APP_DIR}/index.html`,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new ReactLoadablePlugin({
      filename: 'build/react-loadable.json',
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      importWorkboxFrom: 'local',
      chunks: [],
      excludeChunks: [],
      // include: [/\.html$/, /\.js$/],
      // exclude: [/\.jpg$/, /\.png$/],
      // importsDirectory: 'wb-assets',
      // precacheManifestFilename: 'wb-manifest.[manifestHash].js',
      // navigateFallback: '/app-shell',
      // navigateFallbackBlacklist: [/^\/_/, /admin/],
      // navigateFallbackWhitelist: [/^\/pages/],
      // templatedURLs: {
      //   '/app-shell': [
      //     'dev/templates/app-shell.hbs',
      //     'dev/**/*.css',
      //   ],
      //   '/other-page': 'my-version-info',
      // },
      // offlineGoogleAnalytics: true,
      // cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 10,
            cacheName: 'app-cache',
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60,
            },
            // Configure background sync.
            backgroundSync: {
              name: 'my-queue-name',
              options: {
                maxRetentionTime: 60 * 60,
              },
            },
          },
        },
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          // Apply a cache-first strategy.
          handler: 'CacheFirst',

          options: {
            // Use a custom cache name.
            cacheName: 'images',

            // Only cache 10 images.
            expiration: {
              maxEntries: 10,
            },
          },
        },
      ],
    }),
  ],
  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
