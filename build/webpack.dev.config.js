const webpack = require('webpack')
const merge = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')

const PORT = 3020

const webpackConfigDev = {
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_DOMAN': JSON.stringify('http://www.api-dev.baidu.com/'),
      IS_DEVELOPMETN: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'index', // 入口文件名
      filename: 'vendor.bundle.js', // 打包后的文件名
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`,
    }),
     //加入sourcemap
     new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.[hash].js']
  }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: '../app/',
    historyApiFallback: false,
    hot: true,
    open: true,
    // inline: false,
    // proxy: casProxy(),
    port: PORT,
    // stats: { colors: true },
  },
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
