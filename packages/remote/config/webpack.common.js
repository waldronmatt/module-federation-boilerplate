const { merge } = require('webpack-merge');
const webpack = require('webpack');
const { baseParts } = require('@waldronmatt/webpack-config');
const paths = require('./paths');
const parts = require('./webpack.parts');

const commonConfig = isProduction => {
  parts(isProduction);

  return merge([
    {
      entry: {
        main: [`${paths.src}/bootstrap.js`],
      },
      output: {
        path: paths.build,
        publicPath: paths.publicPath,
      },
      resolve: {
        modules: [paths.src, 'node_modules'],
        alias: {
          '@': paths.src,
        },
      },
      optimization: {
        /*
          disable webpack base config `runtimeChunck: single`
          https://github.com/webpack/webpack/issues/11691
        */
        runtimeChunk: false,
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        }),
      ],
    },
    baseParts.loadJS(),
    baseParts.setScriptOutputPath(),
    baseParts.loadCSS(),
    baseParts.setStyleOutputPath(),
    baseParts.loadRawAssets(),
    parts.loadPages(),
    parts.loadMF(),
  ]);
};

module.exports = commonConfig;
