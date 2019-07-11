// 加载HTTP模块
var http = require('http')

// 虚拟SQL读取出来的数据
var items = []

// 创建HTTP服务
http.createServer(function (req, res) {

  // 设置跨域的域名，* 代表允许任何域名跨越 设置Cros跨域
  res.setHeader('Access-Control-Allow-origin', '*')
  // 设置header类型
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  // 跨域允许的请求方式
  res.setHeader('Content-Type', 'application/json')

  // 判断请求
  switch (req.method) {
    // 设置了cros跨域 
    // post请求时，浏览器会先发一次options请求，如果请求通过，则继续发送正式的post请求
    case 'OPTIONS':
      res.statusCode = 200
      res.end()
      break
      // 如果是get请求，则直接返回items数组
    case 'GET':
      let data = JSON.stringify(items)
      res.write(data)
      break
      // 如果是post请求
    case 'POST':
      let item = ''
      // 读取每次发送的数据
      req.on('data', function (chunk) {
        item += chunk
      })
      req.on('end', function () {
        item = JSON.parse(item)
        items.push(item.item)
        // 将数据返回到客户端/
        let data = JSON.stringify(items)
        res.write(data)
        res.end()
      })
      break
  }

}).listen(3000)