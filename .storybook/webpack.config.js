/* eslint-disable */
require('babel-register');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../webpack.config.js').default;
const loaders = require('../config/loaders.js');

module.exports = function(storybookBaseConfig, configType) {
  const rules = [
    ...storybookBaseConfig.module.rules,
    ...config.module.rules,
  ];

  return {
    ...storybookBaseConfig,
    resolve: {
      ...storybookBaseConfig.resolve,
      ...config.resolve,
    },
    module: {
      rules,
    },
  }
};
/* eslint-enable */
