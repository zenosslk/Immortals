var url = require("url")
var http = require('http')

http.createServer(function (req, res) {
  if (req.url != "xxx") {
    var result = url.parse(req.url, true)
    console.log(result)
  }
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"

  })
  res.write("<h3>1111111</h3>")
  res.end()

}).listen(3000)