const { BABEL_ENV, NODE_ENV } = process.env;
const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test';

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
    '@babel/plugin-transform-classes',
    cjs && '@babel/plugin-transform-modules-commonjs',
  ].filter(Boolean),
};
