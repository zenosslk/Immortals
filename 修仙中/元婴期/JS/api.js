let server = http.createServer()

let url = require('url')

server.on('connection', function (socket) {
  console.log('客户端链接')
})


server.on('request', function (req, res) {
  let {
    pathname,
    query
  } = url.parse(req.url, true)

  let result = []

  req.on('data', function (data) {
    result.push(data)
  })

  req.on('end', function () {
    let r = Buffer.concat(result)
    res.end(r)
  })
})

server.on('close', function (req, res) {
  console.log('服务器关闭')
})

server.on('error', function (req, res) {
  console.log('服务器错误')
})

server.listen(8080, function () {
  console.log('server start  at 8080')
})