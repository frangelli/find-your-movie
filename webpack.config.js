var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname + '/src',
  entry: [
    './js/index.js',
    require.resolve('./polyfills'),
    'babel-polyfill',
    require.resolve('react-dev-utils/webpackHotDevClient')
  ],
  output: {
    filename: 'build.js',
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.(scss)$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
