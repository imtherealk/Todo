var path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  resolve: {
    root: path.resolve('./src')
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.css$/, loader: "style!css"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},

      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
