const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');
const CopyPlugin = require('copy-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const TerserPlugin = require('terser-webpack-plugin');

// terser-webpack-plugin
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackAliases = require('../webpack.aliases');

const APP_DIR = path.resolve(process.cwd(), 'app');
const BUILD_DIR = path.join(
  path.resolve(process.cwd(), 'build'),
  process.env.PUBLIC_URL,
);

/* eslint-disable indent */
module.exports = (mode = process.env.NODE_ENV) => {
  const IS_DEV = mode === 'development';
  const DEBUG_MODE = process.env.DEBUG_MODE || 'false';

  const config = {
    ...webpackAliases,
    mode,
    entry: IS_DEV
      ? [
          'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
          path.join(APP_DIR, 'appServer.js'),
        ]
      : path.join(APP_DIR, 'appServer.js'),
    plugins: [
      new webpack.ProvidePlugin({
        // make fetch available
        fetch: 'exports-loader?self.fetch!whatwg-fetch',
      }),
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
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
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
          // Preprocess 3D party libraries styles
          test: /\.css$/,
          include: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader?name=fonts/[name].[contenthash].[ext]',
              options: {
                publicPath: 'fonts/',
                outputPath: 'css/fonts',
              },
            },
          ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
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
                // the webp option will enable WEBP
                webp: {
                  quality: 75,
                },
              },
            },
            'file-loader?name=images/[name].[hash].[ext]',
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
  };

  if (mode === 'production') {
    config.module.rules = [
      ...config.module.rules,
      {
        // Preprocess project styles
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ];
    config.output = {
      path: BUILD_DIR,
      publicPath: `./${process.env.PUBLIC_URL}/`,
      filename: `js/[name].[hash:8].js`,
      chunkFilename: `js/[name].[hash:8].chunk.js`,
    };
    config.plugins = [
      ...config.plugins,
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
      }),
      new WorkboxPlugin.GenerateSW({
        swDest: 'sw.js',
        importWorkboxFrom: 'cdn',
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
      new ReactLoadableSSRAddon({
        filename: 'ssr-assets-manifest.json',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
      }),
      new CopyPlugin([
        { from: './robots.txt', to: `${BUILD_DIR}/robots.txt` },
        {
          from: './server/SSR/runner/runner.js',
          to: `${BUILD_DIR}/server/runner.js`,
        },
      ]),
    ];
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          terserOptions: {
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      nodeEnv: 'production',
      // sideEffects: true,
      concatenateModules: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
      runtimeChunk: true,
    };
  } else {
    config.output = {
      path: BUILD_DIR,
      publicPath: '/',
      filename: `js/[name].js`,
      chunkFilename: `js/[name].chunk.js`,
    };
    config.module.rules = [
      ...config.module.rules,
      {
        // Preprocess project styles
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ];
    config.plugins = [
      ...config.plugins,
      new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/, // exclude node_modules
        failOnError: false, // show a warning when there is a circular dependency
      }),
    ];
  }

  if (DEBUG_MODE !== 'false') {
    config.plugins = [
      ...config.plugins,
      new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
        test: /\.(js|jsx|css)($|\?)/i,
        exclude: /vendor/,
      }),
    ];
  }

  return config;
};
/* eslint-enable indent */
