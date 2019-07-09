// ETag是根据实体内容生成的一段hash字符串, 可以标识资源的状态 资源发生改变时， ETag也随之发生变化。 ETag是Web服务端产生的， 然后发给浏览器客户端


// 客户端想判断缓存是否可用可以先获取缓存中文档的ETag， 然后通过If - None - Match发送请求给Web服务器询问此缓存是否可用。
// 服务器收到请求， 将服务器的中此文件的ETag, 跟请求头中的If - None - Match相比较, 如果值是一样的, 说明缓存还是最新的, Web服务器将发送304 Not Modified响应码给客户端表示缓存未修改过， 可以使用。
// 如果不一样则Web服务器将发送该文档的最新版本给浏览器客户端

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
      let ifNoneMatch = req.headers['if-none-match']
      let out = fs.createReadStream(filepath)
      let md5 = crypto.createHash('md5')

      out.on('data', function (data) {
        md5.update(data)
      })

      out.on('end', function () {
        let etag = md5.digest('hex')

        let etag = `${stat.size}`
        if (ifNoneMatch == etag) {
          res.writeHead(304)
          res.end('')
        } else {
          return send(req, res, filepath, etag)
        }
      })
    }
  })
}).listen(8888)


function sendError(req, res) {
  res.end("Not Found")
}

function send(req, res, filepath, etag) {
  res.setHeader('Content-Type', mime.getType(filepath))
  res.setHeader('etag', etag)
  fs.createWriteStream(filepath).pipe(res)
}