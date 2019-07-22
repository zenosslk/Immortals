
Function.prototype.apply = function (context, rest) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window
    }

    context.fn = this
    let result

    if (rest === undefined || rest === null) {
        result = context.fn(rest)
    }else if(typeof rest === 'object'){
        result = context.fn(...rest)
    }

    delete context.fn 
    return result 

}


// 测试代码
// var foo = {
//     name: 'Selina'   
// }
// var name = 'Chirs';
// function bar(job, age) {
//     console.log(this.name);
//     console.log(job, age);
// }
// bar.apply(foo, ['programmer', 20]);
// // Selina programmer 20
// bar.apply(null, ['teacher', 25]);
// // 浏览器环境: Chirs teacher 25; node 环境: undefined teacher 25
 