// 生产环境使用

const path = require('path')
// 合并webpack 配置
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
// 用于提取css到文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 用于压缩css代码
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
// 用于删除上次构建的文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 用户拷贝静态资源
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 模块打包分析
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: '#souce-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new OptimizeCssnanoPlugin({
      source: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode:'state'
    })
  ]
})
 