根目录下建二个文件



.env.development 开发环境
NODE_ENV = 'development' //当前的环境
BASE_URL = 'http://localhost:3333/' //开发环境的地址




.env.production 生产环境
NODE_ENV = 'production' //当前的环境
BASE_URL = 'url' //生产环境的地址


## vue.config.js 

<!-- 判断是否为开发环境 -->
if(process.env.NODE_ENV === 'development'){
  doing.something(开发环境)
}else{
  doing.something(生产环境)
}