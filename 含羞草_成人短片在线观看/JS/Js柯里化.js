// 什么是函数柯里化？实现 sum(1)(2)(3) 返回结果是1,2,3之和


// 函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
// 并且返回接受余下的参数而且返回结果的新函数的技术。   
function curry(fn, args = []) {
    return function () {
        let rest = [...args, ...arguments]
        if (rest.length < fn.length) {
            return curry.call(this, fn, rest)
        } else {
            return fn.apply(this, rest)
        }
    }
}

function sum(a, b, c) {
    return a + b + c
}

let sumfn = curry(sum)

console.log(sumfn(14)(22)(3))