## postcss.config.js   配置postcss 实现自动添加css3前缀
## babel.config.js     配置babel 实现es6/7/8 转es 5



## 1. 初始化项目

安装相关依赖
npm init 
生成package.json 文件


## 2. 安装webpack

安装相关依赖
npm i webpack webpack-cli -D


## 3. 测试webpack 是否安装成功

新建src 文件夹， 再建main.js , 随便console.log

package.json / scripts:{
  "serve":"webpack ./src/main.js --mode development"
}

npm run serve



## 开始配置功能

修改package.json / scripts:{
  "serve" :"webpack ./src/main.js --config ./build/webpack.config.js"
    

}

新建 build / webpack.config.js




## 配置ES6/7/8 转ES5 代码
安装相关依赖
npm i babel-loader @babel/core @babel/preset-env

修改webpack 配置： 
 
rules:[
  {
    test:/\.jsx?$/,
    exclude:/node_modules/,
    use:{
      {
        loader:'babel-loader'
      }
    }
  }
]
同时根目录创建babel.config.js

module.exports={
  presets:[
    "@babel/preset-env"
  ]
}

执行npm run serve 查看结果

## ES6/7/8 api 转es5

babel-loader 只会将es6/7/8语法转为es5语法 ， 但是对新api 并不会转换
我们可以通过babel-polyfill 对一些不支持新语法的客户端提供新语法的实现

安装相关依赖
Npm i @babel/polyfill 

webpack.entry中配置

OR 按需引入 polyfill 

安装相关依赖
npm i core-js@2 @babel/runtime-corejs2 -S
修改babel-config.js
presets:[
   ["@babel/preset-env" , {
     "useBuiltIns":"usage"
   }]
]

## 配置scss 转 css 

在没配置css 相关的loader 时，引入scss / css 相关文件打包的话 会报错
安装相关依赖

npm i sass-loader dart-sass css-loader style-loader -D

sass-loader , dart-sass 主要是将scss/sass 语法转为css
css-loader 主要是解析css 文件
style-loader 主要是将css 解析到HTML 页面的style 上

webpack配置：
{
  test: /\.(scss|sass)$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader',
      options: {
        implementation: require('dart-sass')
      }
    }
  ]
}



## 配置postcss 实现自动添加css3 前缀

安装相关依赖
npm i postcss-loader autoprefixer -D
{
  loader:'css-loader',
  options:{
    importLoaders:2
  }
},
{
  loader:'postcss-loader'
}
新建postcss.config.js
module.exports={
  plugins:{
    autoprefixer:{}
  }
}

##使用 html-webpack-plugin 来创建HTML页面
使用html-webpack-plugin 来创建HTML页面，并自动引入打包生成的js 文件

安装依赖
npm i html-webpack-plugin -D

新建一个public/index.html

修改webpack配置
plugins:[
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname , '../public/index.html')
  })
]



## 配置devServer 热更新功能

通过代码的热更新功能，我们可以实现不刷新页面的情况下，更新我们的页面

安装依赖

npm i webpack-dev-server -D

修改webpack.config.js 配置

devServer:{
  hot:true,
  port:3000,
  contentBase:'./dist'
}


通过配置devServer 和 HotModuleReplacementPlugin 插件来实现热更新

plugins:{
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
}


## 配置webpack 打包 图片/媒体/字体等文件

安装依赖

npm i file-loader url-loader -D

file-loader 解析文件URL ，并将文件复制到输出的目录中

url-loader 功能 与file-loader 类似，如果文件小于限制的大小。则会返回base64编码，否则使用file-loader将文件复制到输出的目录中

修改webpack-config.js 配置添加rules 配置，分别对图片，媒体，字体文件进行配置

rules:[
{
  test: /\.(jpe?g|png|gif)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 4096,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }
      }
    }
  ]
},
{
  test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  use:[
    {
      loader:'url-loader',
      options:{
        limit:4096,
        fallback:{
          loader:'file-loader',
          options:{
            name:'media/[name].[hash:8].[ext]
          }
        }
      }
    }
  ]
},
{
  test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
  use:[
    {
      loader:'url-loader',
      options:{
        limit:4096,
        fallback:{
          loader:'file-loader',
          options:{
            name:'fonts/[name].[hash:8].[ext]'
          }
        }
      }
    }
  ]
}

]



##让webpack 识别 .vue 文件

安装需要的依赖文件

npm i vue-loader vue-template-compiler cache-loader thread-loader -D 
npm i vue -S

vue-loader 用于解析.vue 文件
vue-template-compiler 用于编译模板
cache-loader 用于缓存loader 编译的结果
thread-loader 使用worker 池来运行loader ,每个worker都是一个node.js进程

修改webpack 配置
const VueLoaderPlugin = require('vue-loader/lib/plugin')



resolve:{
  alias:{
    vue$:'vue/dist/vue.runtime.esm.js'
  }
}

rules:[
  {
    test:/\.vue$/,
    use:[
      {
        loader:'cache-loader'
      },
      {
        loader:'thread-loader'
      },
      {
        loader:'vue-loader',
        options:{
          compilerOptions:{
            preserveWhitespace:false
          }
        }
      }
    ]
  }
]

plugins:[
  new VueLoaderPlugin()
]


测试：
  新建 src/ App.vue
  修改main.js：{
    import Vue from 'vue'
    import App from './App.vue'

    new Vue({
      render: h => h(App)
    }).$mount('#app')
  }



## 定义变量环境

通过webpack 提供的DefinePlugin 插件，可以很方便的定义环境变量

plugins:[
  new webpack.DefinePlugin({
    'process.env':{
      VUE_APP_BASE_URL:JSON.stringify('http://localhost:3000')
    }
  })
]


##区分生成环境和开发环境

新建二个文件：
webpack.dev.js 开发环境使用
webpack.prod.js 生成环境使用
webpack.config.js 公用配置


开发环境：
  1. 不需要压缩代码
  2. 需要热更新
  3. css 不需要提取到css 文件
  4. sourceMap 原映射

生成环境：
  1. 压缩代码
  2. 不需要热更新
  3. 提取css,压缩css 文件
  4. sourceMap 原映射
  5. 构建前清楚上一次构建的内容

安装所需依赖：
npm i @intervolga/optimize-cssnano-plugin mini-css-extract-plugin clean-webpack-plugin webpack-merge copy-webpack-plugin -D

  1. @intervolga/optimize-cssnano-plugin 用于压缩css 代码
  2. mini-css-extract-plugin 用于提取css到文件中
  3. clean-webpack-plugin 用于删除上次构建的文件
  4. webpack-merge合并webpack 配置
  5. copy-webpack-plugin 用户拷贝静态资源


开发环境配置 build/webpack.dev.js
生成环境配置 build/webpack.prod.js


修改package.json

"scripts":{
  "serve":"webpack-dev-server --config ./build/webpack.dev.js",
  "build":"webpack --config ./build/webpack.prod.js"
}



## 打包分析

有的时候我们需要看一下webpack 打包完成后到底打包了声明东西。

安装依赖

npm i --save-dev webpack-bundle-analyzer 

修改webpack-prod.js 配置， 在plugins属性中新增一个插件

在开发环境中，我们没必要进行模块打包分析的， 所以我们将插件配置在了生产环境的配置项中

plugins:[
  new BundleAnalyzerPlugin({
    analyzerMode:'state'
  })
]


## 集成VueRouter , Vuex

安装依赖:
  npm i vue-router vuex --save

## 集合Vue-Router
  新增视图组件在 src 目录下新增两个视图组件 src/views.Home.vue 和 src/views/About.vue

## 配置路由的懒加载

在没配置路由懒加载的情况下，我们的路由组件在打包的时候，都会打包到同一个js文件去，当我们的视图组件越来越多的时候，就会导致这个 js 文件越来越大。然后就会导致请求这个文件的时间变长，最终影响用户体验

安装依赖:
  npm i @babel/plugin-syntax-dynamic-import --save-dev


  修改babel-config.js

module.exports={
  presets:[
    {
      "@babel/preset-env",
      {
        useBuiltIns:"usage
      }
    }
  ],
  plugin:[
    <!-- 添加这个 -->
    '@babel/plugin-syntax-dynamic-import'
  ]
}


routes:[
  {
    path:'Home',
    component:()=>import( '../views/Home.vue' )
  }
]

## 集成Vuex 

在src 目录下新建store/index.js


// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  counter: 0
}
const actions = {
  add: ({commit}) => {
    return commit('add')
  }
}
const mutations = {
  add: (state) => {
    state.counter++
  }
}
const getters = {
  getCounter (state) {
    return state.counter
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})


main.js 中引入调用