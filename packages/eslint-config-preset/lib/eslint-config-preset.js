module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  extends: ['@tongtian/eslint-config-base-preset', 'airbnb-typescript', 'airbnb/hooks'],
  plugins: ['jest'],
};
