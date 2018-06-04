const { createConfig } = require('@webpack-blocks/webpack');
const babel = require('@webpack-blocks/babel');

module.exports = {
  components: 'src/**/[A-Z]*.js',
  webpackConfig: createConfig([babel()]),
};
