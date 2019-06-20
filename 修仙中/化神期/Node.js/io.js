console.log(1)
let fs = require('fs')

getExt = () => {
  fs.readFile("ext.json", (err, data) => {
    console.log(2)
  })
}
getExt()

console.log(3)