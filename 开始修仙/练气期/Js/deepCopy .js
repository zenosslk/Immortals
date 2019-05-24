const deepCopy = (sourceObj) => {
    if (typeof sourceObj !== 'object') return
    let newObj = sourceObj instanceof Array ? [] : {}

    for (let key in sourceObj) {
        if (sourceObj.hasOwnProperty(key)) {
            newObj[key] = (typeof sourceObj[key] === 'object' ? deepCopy(sourceObj[key]) : sourceObj[key])
        }
    }
    return newObj
}
let obj = {
    a: 1,
    arr: [2, 3]
};
let res = deepCopy(obj);
console.log(res.arr === obj.arr); // false，指向不同的引用
console.log(res === obj); // false