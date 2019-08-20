// 实现函数节流

function throttle(fn, delay) {
  // 定时器模式
  let timer
  return function(args) {
    let that = this
    if (timer) {
      timer = setTimeout(() => {
        timer = null
        fn.call(that, args)
      }, delay)
    }
  }
}
function throttle(fn, delay) {
  // 时间戳模式
  let previous = 0
  return function(args) {
    let that = this
    let nowTime = +new Date()
    if (nowTime - previous > delay) {
      fn.call(that, args)
      provide = nowTime
    }
  }
}

// 冒泡排序 , 从小到大
var arr = [23, 2, 42, 435, 56, 65, 74, 8, 67]

function pao(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let copy = arr[i]
        arr[i] = arr[j]
        arr[j] = copy
      }
    }
  }
  return arr
}

// console.log(pao(arr)) 
// 实现new 操作符
function New(fn, ...args) {
  let rest = {}
  //  设置原型对象
  Object.setPrototypeOf(rest, fn.prototype)
  // 改变this指向
  let result = fn.apply(rest , args)
  return result instanceof Object ? result : rest
}


// 实现数组去重

var str = '122343254325223545345asdas'.split('')

// 实现懒加载
// getBoundingClientRect

// 深复制

// deepCopy

// 判断是否为Object
// 创建一个新的Array or obj
// 进行遍历判断每一项是否有这个值

// 浅复制
