const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './client/components/index.jsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'client', 'compiled'),
    publicPath: '/compiled/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/ , loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/ , loader: "file-loader" },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  devtool : '#source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.UglifyJsPlugin()
  ],
};
