// 通过时间戳来实现的
function throttle(fn, delay) {
    // 定义时间戳
    let previous = 0
    return function (arg) {
        var that = this
        // 将时间变为number
        let newDate = +new Date()

        if (newDate - previous > delay) {
            fn.call(that, arg)
            previous = newDate
        }
    }
}


function throttle(fn, delay) {
    let timer
    return function (arg) {
        var that = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(that, arg)
        }, delay)
    }
}