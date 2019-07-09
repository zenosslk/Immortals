var http = require('http')

var tools1 = require('./03_tool-add')

var tools2 = require('o3_tool-multiply')

var tools3 = require('jscy-module')

http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  })
  res.write("<h1>me is fuck</h1>")

  // console.log(tools1.add(1, 2, 3))

  /** 
   *  6
   *  6
   * node 运行过程中，它请求了二次
   * localhost:3000 一次
   * localhost:3000/xxx 为二次 
   */
  // console.log(tools2.multiply(1, 1, 1))

  console.log(tools3.add(1, 1))
  console.log(tools3.mutiply(2, 2))

  res.end()

}).listen(3000)