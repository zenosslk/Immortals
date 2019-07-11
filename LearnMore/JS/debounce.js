// 且每次触发函数的间隔小于设置的时间，防抖的情况下只会调用一次，而节流的情况会每隔一定时间调用一次函数
// 防抖和节流的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，

// 防抖(debounce): n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间


// function debounce(fn, delay, immediate) {
//     let timer, result;
//     // 这里不能使用箭头函数， 箭头函数this指向window
//     const debounced = function (...args) {
//         if (timer) clearTimeout(timer)

//         if (immediate) {
//             const callNow = !timer
//             timer = setTimeout(() => {
//                 timer = null
//             }, delay)
//             if (callNow) result = fn.apply(this, args)
//         } else {
//             timer = setTimeout(() => {
//                 fn.apply(this, args)
//             }, delay);
//         }
//         return result
//     }

//     debounced.cancel = () => {
//         clearTimeout(timer)
//         timer = null
//     }
//     return debounced
// }



// 简单实现过程！
function debounce(fn, delay) {
    // 定义定时器
    let timer
    return function (args) {
        let that =this 
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.call(that , args)
        },delay)
    }
}