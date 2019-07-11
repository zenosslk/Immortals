// 实现强制缓存
// 把资源缓存在客户端， 如果客户端再次需要此资源的时候， 先获取到缓存中的数据， 看是否过期， 如果过期了。 再请求服务器
// 如果没过期， 则根本不需要向服务器确认， 直接使用本地缓存即可


let http = require('http')
let url = require('url')
let path = require('path')
let fs = require('fs')
let mime = require('mime')
let crypto = require('crypto')

http.createServer(function (req, res) {
  let {
    pathname
  } = url.parse(req.url, true)

  let filepath = path.join(__dirname, pathname)

  fs.stat(filepath, (err, stat) => {
    if (err) {
      return sendError(req, res)
    } else {
      send(req, res, filepath)
    }
  })
}).listen(8888)

function sendError(req, res) {
  res.send("Not Found")
}

function send(req, res, filepath) {
  res.setHeader('Content-Type', mime.getType(filepath))
  res.setHeader('Expires', new Date(Date.now() + 30 * 1000).toUTCString())
  res.setHeader('Cache-Control', 'max-age=30')
  fs.createWriteStream(filepath).pipe(res)
}