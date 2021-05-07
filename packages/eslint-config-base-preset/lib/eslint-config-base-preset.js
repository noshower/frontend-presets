module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
