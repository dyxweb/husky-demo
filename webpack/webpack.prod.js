const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map', // 定位错误
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify('生产环境')
    })
  ]
}
