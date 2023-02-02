const path = require('path')
module.exports = {
    pages: {
        index: {
            // page的入口文件
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html'
        }
    },
  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}