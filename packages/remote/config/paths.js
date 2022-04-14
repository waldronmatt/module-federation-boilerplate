const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  publicPath: 'auto',
  INDEX_PAGE: path.join(__dirname, 'index.html'),
  ERROR_PAGE: path.join(__dirname, '404.html'),
  PORT: process.env.PORT || 3001,
};
