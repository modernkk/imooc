var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, "app/main.jsx"),
    vendors: ["react"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        presets:['es2015','react']
      }
    },{
      test: /\.css/,
      loader: "style-loader!css-loader"
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
