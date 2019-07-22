// 简单实现过程！
function debounce(fn, delay) {
    // 定义定时器
    let timer
    return function (args) {
        let that = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(that, args)
        }, delay)
    }
}



// 节流是一段时间只执行一次
// 时间戳模式
// function throttle(fn, delay) {

//     // 定义时间戳
//     let previous = 0
//     return function (arg) {
//         var that = this
//         // 将时间变为number
//         let newDate = +new Date()

//         if (newDate - previous > delay) {
//             fn.call(that, arg)
//             previous = newDate
//         }
//     }
// }
// 定时器模式
function throttle(fn, delay) {
    let timer
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