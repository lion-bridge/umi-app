module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
    page: true,
    REACT_APP_ENV: true,
    'import/prefer-default-export': 1,
  },
};
