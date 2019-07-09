// 引入HTTP模块
let http = require('http')
// 引入fs 模块
let fs = require('fs')

http.createServer(function (req, res) {


  // 获取响应路径
  let pathName = req.url

  // 默认加载路径
  if (pathName == '/') {
    // 默认加载的首页
    pathName = "index.html"
  }

  if (pathName != 'xxx') {
    fs.readFile("./WebService/" + pathName, (err, data) => {
      if (err) {
        fs.readFile('./WebServise/404.html', (errorNotFound, dataNotFound) => {
          if (errorNotFound) {
            console.log(errorNotFound)
          } else {
            res.writeHead(200, {
              "Content-Type": "text/html;charset=UTF-8"
            })

            res.write(dataNotFound)
            res.end()
          }
        })
        return
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html;charset=UTF-8"
        })
        res.write(data)
        res.end()
      }
    })
  }
}).listen(3000)