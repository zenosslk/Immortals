proxyTable: {
  '/api/xxx': {
    target: 'www.baidu.com',
    bypass: function (req, res, proxyOptions) {
      req.headers.referer = ''
    },
    // 接受运行在HTTPS上的服务
    secure: false
    pathRewrite: {
      '^/api/xxx': 'xxx'
    }
  }
}