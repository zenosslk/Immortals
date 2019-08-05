// 实现一个new 操作符

// 解析: new 操作符做了哪些事
// new操作符会返回一个对象， 所以我们需要在内部创建一个对象
// 这个对象, 也就是构造函数中的this , 可以访问到挂载在this 上的任意属性
// 这个对象可以访问到构造函数原型上的属性， 所以需要将对象与构造函数链接起来
// 返回原始值需要忽略， 返回对象需要正常处理


// Con ：function
// ...args : 参数

function New(fn, ...args) {
    // 新创建的对象
    let res = {}
    //设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null
    Object.setPrototypeOf(res, fn.prototype)
    // 改变this 指向
    let result = fn.apply(res, args)

    return result instanceof Object ? result : res

}
 