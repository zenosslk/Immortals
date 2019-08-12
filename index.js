// 实现函数节流
function throttle(fn, delay) {
  var previous = 0
  return function(args) {
    const that = this
    const nowTime = +new Date()
    if (nowTime - previous > delay) {
      fn.call(that, args)
      previous = nowTime
    }
  }
}
function throttle(fn, delay) {
  var timer
  return function(args) {
    const that = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.call(that, args)
      }, delay)
    }
  }
}
//  实现函数防抖
function debouce(fn, delay) {
  var timer
  return function(arg) {
    var that = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(that, arg)
    }, delay)
  }
}
// 冒泡排序 , 从小到大
// 实现new 操作符
function New(fn, arg) {
  let rest = {}
  Object.setPrototypeOf(rest, fn.prototype)
  let result = fn.apply(rest, arg)
  return result instanceof Object ? result : rest
}
// 实现数组去重
// 实现懒加载
// 深复制
JSON.parse(JSON.stringify())
var deepCopy = function(Sobj) {
  if (typeof Sobj !== 'object') return
  let Nobj = Sobj instanceof Array ? [] : {}
  for (i in Sobj) {
    if (Sobj.hasOwnPrototype(i)) {
      Nobj[i] = typeof Sobj[i] === 'object' ? deepCopy(Sobj[i]) : Sobj[i]
    }
  }
  return Nobj
}

// 浅复制
assign
var shallowCOpy = function(Sobj) {
  if (typeof Sobj !== 'object') return
  let Nobj = Sobj instanceof Array ? [] : {}
  for (i in Sobj) {
    if (Sobj.hasOwnPrototype(i)) {
      Nobj[i] = Sobj[i]
    }
  }
  return Nobj
}
