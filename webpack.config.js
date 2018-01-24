var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./index.js', './scss/main.scss'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader'],
      }),
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
