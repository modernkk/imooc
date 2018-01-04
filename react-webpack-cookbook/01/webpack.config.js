var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "app/main.jsx"),
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
  }
};
