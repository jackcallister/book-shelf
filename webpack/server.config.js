var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: './server/app.js',

  target: 'node',

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  output: {
    path: './dist/scripts',
    filename: 'server.js'
  },

  node: {
    __filename: true,
    __dirname: true,
    console: true
  },

  externals: nodeModules,

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1&optional=runtime' },
      { test: /\.local$/, loader: 'css-loader/locals?module!less-loader' },
      { test: /\.css$/, loader: 'null-loader' }
    ]
  }
}
