module.exports = {
  resolve: {
    // 省略后缀名
    extensions: ['.js', '.vue', '.jsx', '.json'],
    alias: {
      // 修改入口文件
      vue$: 'vue/dist/vue.js',
      '@': resolve('src')
      // xxx:resolve('src/xxx')
    }
  },

  // 配置vue的入口文件
  entry: './src/main.es',
  output: {
    path: path.join(__dirname, '../'),
    filename: './static/dist/xxx'
  },
  // 加载机
  module: {
    rules: [
      // stylus
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader',
        incluede: []
      },
      // 配置less
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      // 配置ES6
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      // 配置js
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}