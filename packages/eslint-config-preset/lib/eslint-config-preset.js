module.exports = {
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
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  extends: ['@tongtian/base-preset', 'airbnb-typescript', 'airbnb/hooks'],
  plugins: ['jest'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
