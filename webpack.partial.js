const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/)
  ]
};
