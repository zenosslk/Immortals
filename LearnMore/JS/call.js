// call核心:
//     将函数设为传入参数的属性
//     指定this到函数 并传入 给定参数执行函数
//     如果不传入参数或者参数为null 默认指向window/global 
//     删除参数上函数



Function.prototype.call = function (context) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window
    }
    context.fn = this

    let reset = [...arguments].slice(1)
    let result = context.fn(...reset)
    delete context.fn
    return result
}

//测试代码
// var foo = {
//     name: 'Selina'
// }
// var name = 'Chirs';
// function bar(job, age) {
//     console.log(this.name);
//     console.log(job, age);
// }
// bar.call(foo, 'programmer', 20);
// Selina programmer 20
// bar.call(null, 'teacher', 25);
// 浏览器环境: Chirs teacher 25; node 环境: undefined teacher 25
 