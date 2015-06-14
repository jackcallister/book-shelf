module.exports = {
  entry: './src/app',

  output: {
    path: './dist/scripts',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1&optional=runtime' },
      { test: /\.local$/, loader: 'style-loader!css-loader?module!less-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
