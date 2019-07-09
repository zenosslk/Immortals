// Es6 通过extend 来实现继承

// 组合继承

function cat(name, age) {
    this.name = name
    this.age = age
}

cat.prototype.eat = function (food) {
    console.log('eat' + food)
}


function dog(name, age, color) {
    cat.call(this, name, age)
    this.color = color

}

// 将原型指向新对象
dog.prototype = new cat()
// 同时将constructor 变为自己
dog.prototype.constryctor = dog