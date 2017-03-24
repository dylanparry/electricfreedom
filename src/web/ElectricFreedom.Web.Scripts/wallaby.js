module.exports = function wallabyConfig(wallaby)
{
  return {
    files: [
      'scripts/**/*.js',
      'scripts/**/*.jsx',
      'scripts/**/*.snap',
      '!scripts/**/__tests__/*.js',
      '!scripts/**/__tests__/*.jsx',
    ],

    filesWithNoCoverageCalculated: [
      'scripts/**/bootstrap.jsx',
    ],

    tests: [
      'scripts/**/__tests__/*.js',
      'scripts/**/__tests__/*.jsx',
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
