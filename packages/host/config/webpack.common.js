const { merge } = require('webpack-merge');
const webpack = require('webpack');
const { baseParts } = require('@waldronmatt/webpack-config');
const paths = require('./paths');
const parts = require('./webpack.parts');

const commonConfig = (isProduction, environment) => {
  parts(isProduction);
  const targetEnvironment = environment.TARGET_ENV || 'prod';

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
        new webpack.NormalModuleReplacementPlugin(
          /(.*)TARGET_ENV(\.*)/,
          resource => {
            // eslint-disable-next-line no-param-reassign
            resource.request = resource.request.replace(
              /TARGET_ENV/,
              `${targetEnvironment}`
            );
          }
        ),
      ],
    },
    baseParts.loadJS({}),
    baseParts.setScriptOutputPath({}),
    baseParts.loadCSS({}),
    baseParts.setStyleOutputPath({}),
    parts.loadPages(),
    parts.loadMF(),
  ]);
};

module.exports = commonConfig;
