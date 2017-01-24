let environment = process.env.NODE_ENV || 'development';
environment = environment.trim();
const PRODUCTION = environment === 'production';

const webpack = require('webpack');

// Shared config
const sharedConfig = {
  cache: true,
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { // Override babel config to use ES2015 module syntax for tree shaking
          presets: [
            ['latest', {
              es2015: {
                modules: false,
              },
            }],
            'react',
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
          ],
        },
      },
    ],
  },
  plugins: [],
};

// Change some of the shared config if in production mode
if (PRODUCTION) {
  // Ensure we're building in production mode throughout
  sharedConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }));

  // Use detailed source maps
  sharedConfig.devtool = 'source-map';
}

// Define entry points, and outputs as an array
const config = [
  {
    // Admin
    entry: {
      admin: './scripts/admin/src/bootstrap.jsx',
    },
    output: {
      path: 'wwwroot',
      filename: '[name].js',
    },
  },
];

// Loop through the config entries, and extend each object with the shared config
for (let i = 0; i < config.length; i += 1) {
  Object.assign(config[i], sharedConfig);
}

module.exports = config;
