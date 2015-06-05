module.exports = {
  entry: './src/app',

  output: {
    path: './dist/scripts',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1&optional=runtime' },
      { test: /\.css$/, loader: 'style-loader!css-loader?module&importLoaders=1' },
      { test: /\.less$/, loader: 'style-loader!css-loader?module&importLoaders=1!less-loader' }
    ]
  }
};
