/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { createConfig } = require('@webpack-blocks/webpack');
const babel = require('@webpack-blocks/babel');

module.exports = {
  components: 'src/**/[A-Z]*.js',
  webpackConfig: createConfig([babel()]),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguidist/Wrapper'),
  },
};
