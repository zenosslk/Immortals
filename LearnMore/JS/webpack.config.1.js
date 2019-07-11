module.exports = {
    resolve: {
        // 省略后缀名
        extensions: ['.js', '.vue', '.jsx', '.json'],
        alias: {
            // 修改入口文件
            vue$: 'vue/dist/vue.js',
            '@': resolve('src')
        }
    },
    // 入口文件
    entry: {

    },
    // 出口文件
    output: {
        path: path.join(_dirname, '../'),
        filename: './static/dist/xxx'
    },
    module: {
        rules: [{
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader',
                include: []
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }



}