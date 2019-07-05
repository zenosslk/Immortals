// 判断一个整数是否是回文数。 回文数是指正序（ 从左向右） 和倒序（ 从右向左） 读都是一样的整数。
// 输入: 121
// 输出: true
// 示例 2:     2468642  1359531 3n 次方

//     输入: -121
// 输出: false
// 解释: 从左向右读, 为 - 121。 从右向左读, 为 121 - 。因此它不是一个回文数。
// 示例 3:

//     输入: 10
// 输出: false
// 解释: 从右向左读, 为 01。 因此它不是一个回文数。


var isPalindrome = function (x) {
    var num1 = x.toString().split("")
    var num2 = (x.toString().split("").reverse())

    for (let key in num1) {
        if (num1[key] !== num2[key]) {
            return false
        }
    }
    return true
};
isPalindrome(123)