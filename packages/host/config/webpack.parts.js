const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
// eslint-disable-next-line max-len
const AutomaticVendorFederation = require('@module-federation/automatic-vendor-federation');
const packageJson = require('../package.json');

const paths = require('./paths');

const siteData = {
  title: 'Module Federation Template',
  description: 'A dynamic, multi-environment module federation template.',
  keywords: 'webpack, module federation, host, config',
};

// optionally pass in `isProduction` to apply environment-specific logic
const parts = (/* isProduction */) => {
  module.exports.loadPages = () => ({
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        title: `Host | ${siteData.title}`,
        template: `${paths.src}/index.html`,
        favicon: `${paths.public}/favicon.png`,
        meta: {
          description: siteData.description,
          keywords: siteData.keywords,
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
      new HtmlWebPackPlugin({
        filename: '404.html',
        title: `404 | ${siteData.title}`,
        template: `${paths.src}/404.html`,
        favicon: `${paths.public}/favicon.png`,
        meta: {
          description: siteData.description,
          keywords: siteData.keywords,
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
    ],
  });

  module.exports.loadMF = () => ({
    plugins: [
      new ModuleFederationPlugin({
        // This should be our 'shared contract'
        // between the host and the remotes.
        shared: AutomaticVendorFederation({
          packageJson,
          shareFrom: ['dependencies'],
          jquery: {
            /*
              You can make shared modules "eager", which doesn't put
              the modules in a async chunk, but provides them synchronously.
              This allows to use these shared modules in the initial chunk.
              But be careful as all provided and fallback modules
              will always be downloaded.
              There it's wise to provide it only at one point of your app,
              e. g. the shell.
              https://github.com/webpack/webpack/pull/10960
            */
            eager: true,
          },
        }),
      }),
    ],
  });
};

module.exports = parts;
