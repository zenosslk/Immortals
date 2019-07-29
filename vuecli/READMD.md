## postcss.config.js   配置postcss 实现自动添加css3前缀
## babel.config.js     配置babel 实现es6/7/8 转es 5










## 配置ES6/7/8 转ES5 代码
安装相关依赖
npm i babel-loader @babel/core @babel/preset-env

修改webpack 配置： 
 
rules:[
  {
    test:/\.vue?$/,
    exclude:/node_modules/,
    use:{
      {
        loader:'babel-loader'
      }
    }
  }
]

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


## 配置scss 转 css 

在没配置css 相关的loader 时，引入scss / css 相关文件打包的话 会报错
安装相关依赖

npm i sass-loader dart-sass css-loader style-loader -D

sass-loader , dart-sass 主要是将scss/sass 语法转为css
css-loader 主要是解析css 文件
style-loader 主要是将css 解析到HTML 页面的style 上


## 配置postcss 实现自动添加css3 前缀

安装相关依赖
npm i postcss-loader autoprefixer -D



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

通过配置devServer 和 HotModuleReplacementPlugin 插件来实现热更新


## 配置webpack 打包 图片/媒体/字体等文件

安装依赖

npm i file-loader url-loader -D

file-loader 解析文件URL ，并将文件复制到输出的目录中

url-loader 功能 与file-loader 类似，如果文件小于限制的大小。则会返回base64编码，否则使用file-loader将文件复制到输出的目录中

修改webpack-config.js 配置添加rules 配置，分别对图片，媒体，字体文件进行配置


##让webpack 识别 .vue 文件

安装需要的依赖文件

npm i vue-loader vue-template-compiler cache-loader thread-loader -D 
npm i vue -S

vue-loader 用于解析.vue 文件
vue-template-compiler 用于编译模板
cache-loader 用于缓存loader 编译的结果
thread-loader 使用worker 池来运行loader ,每个worker都是一个node.js进程

修改webpack 配置