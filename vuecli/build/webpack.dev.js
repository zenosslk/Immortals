// 开发环境使用
// const merge = require('webpack-merge')
// const webpackConfig = require('./webpack.config')
// const webpack = require('webpack')

// module.exports = merge(webpackConfig, {
//   // 指定打包模式
//   mode: 'development',
//   // 提高souremap生成的效率
//   devtool: 'cheap-module-eval-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(scss|sass)$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders:2 
//             }
//           },
//           {
//             loader:'sass-loader',
//             options:{
//               implementation:require('dart-sass')
//             }
//           },
//           {
//             loader:'postcss-loader'
//           }
//         ]
//       }
//     ]
//   },
//   plugins:[
//     new webpack.DefinePlugin({
//       'process.env':{
//         NODE_ENV:JSON.stringify('development')
//       }
//     })
//   ]
// })
// build/webpack.dev.js
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ]
})
