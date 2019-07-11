// 深刻理解并实现压缩和解压

// 为什么要压缩呢？ 有什么好处 ?
//   可以使用zlib模块进行压缩及解压缩处理, 压缩文件以后可以减少体积， 加快传输速度和节约带宽代码
// 压缩和解压缩对象都是transform转换流， 继承自duplex双工流即可读可写流
// zlib.createGzip： 返回Gzip流对象， 使用Gzip算法对数据进行压缩处理
// zlib.createGunzip： 返回Gzip流对象， 使用Gzip算法对压缩的数据进行解压缩处理
// zlib.createDeflate： 返回Deflate流对象， 使用Deflate算法对数据进行压缩处理
// zlib.createInflate： 返回Deflate流对象， 使用Deflate算法对数据进行解压缩处理
// 实现压缩和解压
// 因为压缩我文件可能很大也可能很小， 所以为了提高处理速度， 我们用流来实现


// gzip方法用于实现压缩
// gunzip方法用于实现解压
// 其中文件msg.txt是同级目录
// 为什么需要这么写： gzip(path.join(__dirname, 'msg.txt'));
// 因为console.log(process.cwd());
// 打印出当前工作目录是根目录， 并不是文件所在目录， 如果这么写gzip('msg.txt');
// 找不到文件就会报错
// basename 从一个路径中得到文件名， 包括扩展名的， 可以传一个扩展名参数， 去掉扩展名
// extname 获取扩展名
// 压缩的格式和解压的格式需要对上， 否则会报错


let fs = require('fs')
let path = require('path')
let zlib = require('zlib')

function gzip(src) {
  fs.createReadStream(src)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(src + '.gz'))
}

gzip(path.join(__dirname, 'msg.txt'))

function gunzip(src) {
  fs.createReadStream(src)
    .pipe(zlib.createGunzip())
    .pipe(fs.createReadStream(path.join(__dirname, path.basename(src, '.gz'))))
}
gunzip(path.join(__dirname, 'msg.txt.gz'))



// 有些时候我们拿到的字符串不是一个流， 那怎么解决呢
let zlib = require('zlib')

let str = 'hello'

zlib.gzip(str, (err, buffer) => {
  console.log(buffer.length)
  zlib.unzip(buffer, (err, data) => {
    console.log(data.toString())
  })
})

//  有可能压缩后的内容比原来还大， 要是内容太少的话， 压缩也没什么意义了
//  文本压缩的效果会好一点， 因为有规律