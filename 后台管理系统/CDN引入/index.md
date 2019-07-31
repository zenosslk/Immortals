## 无插件引入 cdn

首先我们不让 webpack 打包用 cdn 引入的文件

对一些不经常改动的库，可以通过 cdn 引入，webpack 不对他们打包

let externals ={
'vue':'vue',
'axios':'axios',
'element-ui' :'ELEMENT',
'vue-router': 'VueRouter',
'vuex':'Vuex',
'echarts':'echarts',
'vue2-editor':'VueEditor'
}

然后配置 cdn

## vue.config.js

const cdn = {
  css:[
  <!-- //element-ui css -->
  'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
  ],
  js:[
  <!-- vue -->
  'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
  <!-- axios -->
  'http://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
    <!-- vuex -->
  'https://unpkg.com/vuex@3.1.0/dist/vuex.min.js',
  <!-- vue-router -->
 'https://unpkg.com/vue-router@3.0.6/dist/vue-router.min.js',
 <!-- element -->
 'https://unpkg.com/element-ui@2.7.2/lib/index.js',
 <!-- echarts -->
'https://cdn.jsdelivr.net/npm/echarts@4.2.1/dist/echarts.min.js',
  ]
}




chainWebpack: config=>{
  (process.env.VUE_APP_CURRENTMODE === 'product'){
    <!-- 忽略打包 -->
    config.externails(externails) 
    config.plugin('html')
    .tap((args)=>{
      args[0].cdn= cdn
      return args
    })
  }
}

<!-- public/index.html 读取cdn -->

<% if(process.env.VUE_APP_CURRENTMODE === 'production'){ %>
  <% for(var css of htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" herf="<%=css%>" as=""style>
    <% } %>
  <% for(var css of htmlWebpackPlugin.options.cdn.js) { %>
  <script  herf="<%=js%>"> </script>
  <% } %>
<% } %>




## 插件引入cdn 

由于手动引入cdn 太过麻烦， 而且担心版本变化，每次都需要手动去更改，所以为了更好的开发体验，
引入了自动匹配cdn插件， webpack-cdn-plugin 

安装依赖

npm i webpack-cdn-plugin --save
实例化插件
  const cdnPlugin = require('webpack-cdn-plugin')

configureWebpack中引用

new cdnPlugin({
  modules:[
    {
      name:'vue' , var :'vue' , path:'dist/vue.min.js'
    },
    {
       name:'axios' , var :'axios' , path:'dist/axios.min.js'
    },
    {
       name:'vuex' , var :'vuex' , path:'dist/vuex.min.js'
    },
    {
       name:'element-ui' , var :'ELEMENT' , path:'lib/index.js'
    },
    {
       name:'vue-router' , var :'VueRouter' , path:'dist/vue-router.min.js'
    },
    {
       name:'echarts' , var :'echarts' , path:'dist/echarts.min.js'
    }
  ]
})


name:插件名
var : 项目中实例化的名字
path: 路径名称
style: css路径名称