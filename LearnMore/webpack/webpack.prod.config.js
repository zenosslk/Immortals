'use strict'

process.env.BABEL_ENV = 'production'

process.env.NODE_ENV = 'production'

const path = require('path')

const paths = require('./paths')

const fs = require('fs')

const webpack = require('webpack')

const ExtracTextPlugin = require('extract-text-webpack-plugin')

const {
  webPlugin
} = require('web-webpack-plugin')

module.exports = {
  output: {
    path: paths.build,
    filename: '[name].[chunkhash:8].js',
    chunkFilename = 'static/js/[name].[chuckhash:8].chunk.js',
    publicPath: "/"
  },
  entry: {
    "app": path.resolve(paths.src, "index.js")
  },
  resolve: {
    extensions: [".js", ".json"],
    modules: ["node_modules, paths.src"]
  },
  module: {
    rules: [

      {
        test: /\.css$/,
        include: paths.src,
        loader: ExtracTextPlugin.extract({
          use: [{
            options: {
              root: path.resolve(paths.src, "image")
            },
            loader: require.resolve("css-loader")
          }]
        })
      },
      {
        test: /\.less$/,
        include: paths.src,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              root: path.resolve(paths.src, "image")
            }
          },
          {
            loader: require.resolve('less-loader')
          }
        ]
      }
    ]
  }
}