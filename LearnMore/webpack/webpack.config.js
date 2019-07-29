const path = require('path')

module.exports = {
  // 指定打包模块
  mode: 'development',
  entry: {
    // 配置入口文件
    main: ["@babel/polyfill" , path.resolve(__dirname, '../src/main.js')]
  },
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, '../dist'),
    // 生成的js 文件名称
    filename: '[name].[chunkhash:8].js',
    // 生成的chunk 名称
    chunkFilename = 'static/js/[name].[chuckhash:8].chunk.js',
    // 资源的引用的路径
    publicPath: "/"
  },
  modules:{
    rules:[
      {
        // npm install babel-loader @babel/core @babel/preset-env
        test:/\.vue?$/,
        exclude:/node_modules/,
        use:[
          {
            loader:'babel-loader'
          }
        ]
      }
    ]
  }
}

// ES6/7/8 Api 转es5
// babel-loader只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换。
// 我们可以通过 babel-polyfill 对一些不支持新语法的客户端提供新语法的实现
// 安装
// npm install @babel/polyfill