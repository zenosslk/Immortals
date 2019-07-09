 // 求出大于或等于 N 的最小回文素数。

// 回顾一下，如果一个数大于 1，且其因数只有 1 和它自身，那么这个数是素数。

// 例如，2，3，5，7，11 以及 13 是素数。

// 回顾一下，如果一个数从左往右读与从右往左读是一样的，那么这个数是回文数。

// 例如，12321 是回文数。

// 示例 1：
// 输入：6
// 输出：7
// 示例 2：
// 输入：8
// 输出：11
// 示例 3：
// 输入：13
// 输出：101

var primePalindrome = function (N) {
    if (hui(N) && su(N)){
        console.log(N)
    }
    // 判断是否为素数
    function su(x) {
        if (x % 2 !== 0 && x % 3 !== 0 && x > 1) {
            return true
        } else if (x == 2 || x == 3) {
            return true
        } else {
            return false
        }
    }

    // 判断是否为回文数
    function hui(x) {
        let arr = x.toString().split("")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                return false
            }
        }
        return true
    }
};
primePalindrome(11)