const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common');

const productionConfig = {
  plugins: [
    new ESBuildMinifyPlugin({
      target: 'es2015',
      css: true,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors-host',
          chunks: 'async',
          test: /node_modules/,
          priority: 20,
        },
        common: {
          name: 'commons-host',
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);
