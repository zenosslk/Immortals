// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

var longestCommonPrefix = function(strs) {
    for(let key in strs){
        let nstrs = Array.of(strs[key])
        let oneStrs = nstrs[0].split("")
        let kArr = []
        // 循环会得到三个数组
        console.log(oneStrs)
        // console.log(oneStrs[0])
        // console.log('去了下一次循环')
        
        // console.log(oneStrs)
    }
};
longestCommonPrefix(["flower","flow","flight"])