// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:
// 输入: 123
// 输出: 321
//  示例 2:
// 输入: -123
// 输出: -321
// 示例 3:
// 输入: 120
// 输出: 21

var reverse = function (x) {
    let xx  = (x + "").split("")
    var reg = /^-/
    if(reg.test(xx)){
        xx.shift()
        // console.log(xx)
        xx.reverse()
        console.log(xx)
    }


    // let newX =  (x + "").split("").map(Number).reverse()
    // console.log(newX)
};

reverse(-1123)