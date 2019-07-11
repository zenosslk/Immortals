function A() {}

function B() {
    return new A();
}
A.prototype = B();
B.prototype = new B();
var a = new A();
var b = new B();
console.log(a.__proto__ == b.__proto__);
console.log(a instanceof A);
console.log(a instanceof B);
console.log(b instanceof A);
console.log(b instanceof B);