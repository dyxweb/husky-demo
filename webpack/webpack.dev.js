const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  devServer: {
    hot: true,
    open: true
  },
  mode: 'development',
  devtool: 'cheap-module-source-map', // 定位错误
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify('开发环境')
    }),
    new ReactRefreshWebpackPlugin()
  ]
}
