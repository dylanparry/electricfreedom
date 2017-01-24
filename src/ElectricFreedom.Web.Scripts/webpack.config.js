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
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  performance: {
    // Change performance hints in dev mode
    hints: PRODUCTION ? 'warning' : false,
    maxEntrypointSize: PRODUCTION ? 250000 : 1000000,
    maxAssetSize: PRODUCTION ? 250000 : 1000000,
  },
};

// Define entry points, and outputs as an array
const config = [
  {
    // Admin
    entry: {
      admin: './scripts/admin/src/bootstrap.jsx',
      'admin-libs': [
        'axios',
        'mobx',
        'mobx-react',
        'react',
        'react-dom',
      ],
    },
    output: {
      path: 'wwwroot',
      filename: '[name].js',
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'admin-libs',
      }),
    ],
  },
];

// Loop through the config entries, and extend each object with the shared config
for (let i = 0; i < config.length; i += 1) {
  Object.assign(config[i], sharedConfig);
}

// Change some of the shared config if in production mode
if (PRODUCTION) {
  // Ensure we're building in production mode throughout
  for (let i = 0; i < config.length; i += 1) {
    // Create an empty plugins array if there aren't any existing plugins
    if (typeof config[i].plugins === 'undefined') {
      config[i].plugins = [];
    }

    // Add a define plugin to each config
    config[i].plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }));

    // Use detailed source maps
    config[i].devtool = 'source-map';
  }
}

module.exports = config;
