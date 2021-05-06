module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    requireConfigFile: true,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
  plugins: ['jest'],
};
