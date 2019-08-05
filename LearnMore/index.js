// 实现函数节流

var throttle = function(fn, delay) {
  // 定时器模式
  let timer
  return function(args) {
    const that = this
    if (!timer) {
      timer = setInterval(() => {
        timer = null
        fn.call(that, args)
      }, delay)
    }
  }
}

var throttle = function(fn, delay) {
  // 时间戳模式
  let previous = 0
  return function(args) {
    const that = this
    const NowDate = +new Date()
    if (NowDate - previous > delay) {
      fn.call(that, args)
      previous = NowDate
    }
  }
}

// 冒泡排序 , 从小到大
var arr = [23, 2, 42, 435, 56, 65, 74, 8, 67]
var maopao = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// console.log(unique(arr))
// 实现new 操作符

var New = function(fn, ...args) {
  let rest = {}
  //  设置原型对象
  Object.setPrototypeOf(rest, fn.prototype)

  let result = fn.apply(rest, args)

  return result instanceof Object ? result : rest
}

// 实现数组去重

var str = '122343254325223545345asdas'.split('')

// var unique = function(arr) {
//   let newarr = []
//   arr.forEach(item => {
//     if (!newarr.includes(item)) {
//       newarr.push(item)
//     }
//   })
//   return newarr
// }

var unique = function(arr) {
  let newarr = []
  let obj = {}
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
      newarr.push(arr[i])
    }
  }
  return newarr
}

let newstr = new Set(str)

// 实现懒加载
// getBoundingClientRect

// 深复制

// deepCopy

var deepCopy = function(Sobj) {
  // 判断是否为Object
  if (typeof Sobj !== 'Object') return
  // 创建一个新的Array or obj
  let newObj = typeof Sobj === Array ? [] : {}
  // 进行遍历判断每一项是否有这个值
  for (let i in Sobj) {
    if (Sobj.hasOwnPrototype(i)) {
      newObj[i] =
        typeof Sobj[i] === 'Object' ? deepCopy(Sobj[i]) : Sobj[i]
    }
  }
  return newObj
}

// 浅复制
var shallowCopy = function(Sobj) {
  if(typeof Sobj !=='object') return
  let newSobj = typeof Sobj ===Array ? [] :{}
  for(let i in Sobj){
    if(Sobj.hasOwnPrototype(i)){
      newSobj[i] = Sobj[i]
    }
  }
  return newSobj
}