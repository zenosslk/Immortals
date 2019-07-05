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
    entry: '',
    // 发布文件
    output: {
        path: path.join(_dirname, '../'),
        filename: './static/dist/xxx'
    },

    // 加载机
    module: {
        rules: [
            // 配置Stylus
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader',
                include: []
            },

            // 配置less、
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
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