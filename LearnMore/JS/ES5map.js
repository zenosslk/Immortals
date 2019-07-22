const selfMap = function (fn, context) {

    // Array.prototype.slice.call()能把类数组对象转化成数组
    let arr = Array.prototype.slice.call(this)
    let mappedArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue
        mappedArr.push(fn.call(context, arr[i], i, this))
    }

    return mappedArr
}