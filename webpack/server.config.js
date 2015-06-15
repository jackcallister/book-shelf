var webpack = require('webpack'),
    fs = require('fs'),
    path = require('path');

var node_modules = fs.readdirSync('node_modules').filter(function(x) { return x !== '.bin' });

module.exports = {
  entry: './server/app.js',

  target: 'node',

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

  externals: node_modules,

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1&optional=runtime' },
      { test: /\.local$/, loader: 'css-loader/locals?module!less-loader' },
      { test: /\.css$/, loader: 'null-loader' }
    ]
  }
}
