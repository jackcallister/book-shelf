var webpack = require('webpack'),
    fs = require('fs'),
    path = require('path');

module.exports = {
  entry: './src/routes.jsx',

  target: 'node',

  externals: /^[a-z][a-z\.\-0-9]*$/,

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  output: {
    path: './dist/scripts',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  node: {
    __filename: true,
    __dirname: true,
    console: true
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1&optional=runtime' },
      { test: /\.local$/, exclude: /node_modules/, loader: 'css-loader/locals?module!less-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'null-loader' }
    ]
  }
}
