// 拷贝接收的是一个对象

// assign  浅拷贝

// let obj = {
//     a: 1,
//     arr: [2, 3],
//     c: {
//         a: 2
//     }
// };
// let res = Object.assign({}, obj)

const shallowCopy = (Sobj) => {
    // 判断是否为对象，如果不是直接返回
    if (typeof Sobj !== 'object') return
    // 判断接受的参数是否是Array ，如果是， 则定义的新newObj 则是数组，反之 则为对象
    let newObj = Sobj instanceof Array ? [] : {}
    // 对接收的参数进行遍历，只会遍历可枚举属性， hasOwnProperty 方法判断属性是否存在
    for (let key in Sobj) {
        if (Sobj.hasOwnProperty(key)) {
            newObj[key] = Sobj[key]
        }
    }
    return newObj
}
let obj = {
    a: 1,
    arr: [2, 3]
};

// let res = shallowCopy(obj);
console.log(res.arr === obj.arr); // true，指向同一个引用
console.log(res.a === obj.a); // false