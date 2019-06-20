  module.export = {
    resolve: {
      // 省略后缀名
      extensions: ['.js', '.vue'],
      alias: {
        // 修改入口文件
        'vue$': 'vue/dist/vue.js',
        '@': resolve('src/')
      }
    },
    entry: '',
    output: {
      path: path.join(_dirname, '../'),
      filename: './static/dist/xxx'
    },

    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }]
    }
  }