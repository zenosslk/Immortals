#开启和关闭gzip模式
gzip on;
#gizp压缩起点，文件大于1k才进行压缩
gzip_min_length 1k;
# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
gzip_comp_level 6;
# 进行压缩的文件类型。
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;
#nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩
gzip_static on
# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;
# 设置gzip压缩针对的HTTP协议版本
gzip_http_version 1.1;



## Vue.config.js  
<!-- 安装依赖 -->
npm i compression-webpack-plugin --save-dev

vue cli3配置: 

const CompressionWebpackPlugin = require('compression-webpack-plugin') //Gzip

chainWebpack:config=>{
    config
    .plugin('compression')  //gzip 需要nginx 进行配合
    .use(CompressionWebpackPlugin)
    .tap(()=>[
        {
            test:/\.js$|\.html$|\.css/, //匹配文件名
            threshold:10240 ,           // 超过10k进行压缩
            deleteOriginalAssets:false  //是否删除源文件
        }
    ])
}



## node后台 nginx配置

开启gzip压缩

const compression = require('compression')
app.use(compression())