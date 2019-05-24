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
    if (typeof Sobj !== 'object') return

    let newObj = Sobj instanceof Array ? [] : {}

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