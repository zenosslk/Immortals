// 将对象转为JSON 数据

var jsonStr = {
    "age": 20,
    "name": "jack"
}


// 直接调用eval
function jsonParse(JSON1) {
    return eval('(' + JSON1 + ')');
}


// let json = jsonParse(JSON.stringify(jsonStr))
// Object { x: 5}
// console.log(JSON.stringify(jsonStr))

// console.log(json)