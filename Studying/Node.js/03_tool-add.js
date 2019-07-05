// 假设我们文件其中有个工具模块

// 定义工具库/

var tools = {
  add: (...numbers) => {
    let sum = 0
    for (let number in numbers) {
      sum += numbers[number]
    }
    return sum
  }
}

module.exports = tools


/*
 *暴露模块 
 * export.str = str 
 * module.exports = str
 * 区别
 * module.export 是真正的接口
 * exports 是一个辅助工具
 * 如果module.exports 为空 那么所有的exports 收集到的属性和方法，都赋值给了module.exports
 * 如果module.exports 具有任何属性和方法, 则exports 会被忽略
 * 
 * exports使用方法
 * var str = "Tom_cy is cool"
 * 
 * exports.str = str 
 * 
 * module.exports = str
 * 
 */