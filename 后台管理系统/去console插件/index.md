安装依赖：
    npm i uglifyjs-webpack-plugin --save-dev

然后再 configureWebpack 里面配置它

  const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

  new UglifyJsPlugin ({
    uglifyOptions:{
      compress:{
        warning:false,
        drop_debugger:true,
        drop_console:true
      }
    },
    sourceMap:false,
    parallel:true
  })