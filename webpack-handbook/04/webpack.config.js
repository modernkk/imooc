var webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  plugins: [
    new webpack.BannerPlugin("the file is created by ke.xu")
  ]
}
