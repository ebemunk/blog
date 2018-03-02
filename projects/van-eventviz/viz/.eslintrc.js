module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/prop-types': 0,
  },
}
