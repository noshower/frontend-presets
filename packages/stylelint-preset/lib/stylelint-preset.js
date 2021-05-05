module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-declaration-use-variable', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'plugin/declaration-block-no-ignored-properties': true,
  },
};
