const { BABEL_ENV, NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const isCjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        targets: {
          browsers: ['last 1 version'],
        },
      },
    ],
    '@babel/preset-flow',
    [
      '@babel/preset-react',
      { development: NODE_ENV !== 'production', useBuiltIns: true },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    [
      'babel-plugin-styled-components',
      {
        displayName: !isProduction,
        minify: isProduction,
      },
    ],
    '@babel/plugin-transform-classes',
    '@babel/plugin-proposal-export-default-from',
    isCjs && '@babel/plugin-transform-modules-commonjs',
  ].filter(Boolean),
};
