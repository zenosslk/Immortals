// 实现节流---一段时间只执行一次
// fn-回调函数
// delay-延迟时间
function throttle(fn, delay) {
    // 通过定义时间戳模式
    let previous = 0
    // 返回的回调函数
    return function (arg) {
        let that = this
        let data = +new Date()
        if (data - previous > delay) {
            fn.call(that, arg)
            previous = data
        }
    }
}


function throttle(fn, delay) {
    // 定时器模式
    let timer;
    return function (arg) {
        var that = this
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.call(that, arg)
            }, delay)
        }
    }
}



// 实现防抖- 只要有新的东西，程序就处于等待状态
function debouce(fn, delay) {
    //  定时器模式 
    let timer
    return function (arg) {
        clearTimeout(timer)
        let that = this
        timer = setTimeout(() => {
            fn.call(that, arg)
        }, delay)
    }
}


// 实现一个new 方法
function New(fn, ...arg) {
    // 首先定义一个空对象
    let result = {}
    //Con this指向 result,设置一个指定对象的原型

    Object.setPrototypeOf(result, fn.prototype)
    //Con this指向 result
    let res = Con.apply(result, arg)

    return res instanceof Object ? res : result
}

// 浅拷贝----assign
function shallowCopy(Obj) {
    // typeof 得到的是一个字符串
    if (typeof Obj !== 'object') return

    // 判断Obj 是数组还是对象 从而创建一个新的数组或者对象
    let newObj = Obj instanceof Array ? [] : {}
    for (let i in Obj) {
        if (Obj.hasOwnProperty(i)) {
            newObj[i] = Obj[i]
        }
    }
    return newObj
}


// 深复制---JSON.parse(JSON.stringify(Obj))
function deepCopy(Obj) {
    if (typeof Obj !== 'object') return
    let newObj = Obj instanceof Array ? [] : {}
    for (let i in Obj) {
        if (Obj.hasOwnProperty(i)) {
            // newObj[i] = typeof Obj[i] === 'object' ? Obj[i] : deepCopy(Obj[i])
            newObj[i] = typeof Obj[i] === 'object' ? deepCopy(Obj[i]) : Obj[i]
        }
    }
    return newObj
}

let Obj = {
    a: 1,
    arr: [2, 3]
};
// let res = shallowCopy(Obj);
// console.log(res.arr === Obj.arr); // false，指向不同的引用
// console.log(res === Obj); // false


// 数组去重

var str = "aabbcc123123"
let arr = str.split("")

// includes 方法
// function unique(arr) {
//     let newArr = []
//     arr.forEach((item, index) => {
//         if (!newArr.includes(item)) {
//             newArr.push(item)
//         }
//     })
//     return newArr
// }
// console.log(unique(arr))


// Set方法
let newArr = new Set(arr)
// 得到的是一个Set对象
// console.log(newArr)


// for循环
function unique(arr) {
    let newarr = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
            newarr.push(arr[i])
        }
    }
    return newarr
}
// console.log(unique(arr))

// 冒泡排序
var Sortarr = [111, 2, 3123, 21, 4, 23, 4, 23, 4, 35, 435, 4, 6, 5, 76, 8, 6, 89]

function Sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            // 2 > 1
            if (Sortarr[i] > Sortarr[j]) {
                // 1
                let temp = Sortarr[j]
                // 2
                Sortarr[j] = Sortarr[i]
                // 1 
                Sortarr[i] = temp
            }
        }
    }
    return Sortarr
}
// console.log(Sort(Sortarr))



// 函数柯里化
function curry(fn, args = []) {
    return function () {
        let rest = [...args, ...arguments]
        // 如果两个数据长度不统一，则让函数再次执行
        if (rest.length < fn.length) {
            return curry.call(this, fn, rest)
        } else {
            return fn.apply(this, rest)
        }
    }

}

function addNum(a, b, c) {
    return a + b + c
}

let sum = curry(addNum)

console.log(sum(12, 13, 14))