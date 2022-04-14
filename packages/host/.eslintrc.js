module.exports = {
  ignorePatterns: ['src/bootstrap.js'],
  extends: '@waldronmatt/eslint-config',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
