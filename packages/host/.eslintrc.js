module.exports = {
  ignorePatterns: ['dist/**', 'src/bootstrap.js', 'src/init-remote.js'],
  extends: '@waldronmatt/eslint-config',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
