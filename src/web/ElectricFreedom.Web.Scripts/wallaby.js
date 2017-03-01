module.exports = function wallabyConfig(wallaby) {
  return {
    files: [
      'scripts/**/*.js',
      'scripts/**/*.jsx',
      '!scripts/**/tests/**/*.js',
      '!scripts/**/tests/**/*.jsx',
    ],

    tests: [
      'scripts/**/tests/**/*.js',
      'scripts/**/tests/**/*.jsx',
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.jsx': wallaby.compilers.babel(),
    },

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',
  };
};
