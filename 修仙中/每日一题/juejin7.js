let a = 3;
let b = new Number(3); //new Number() 不是一个数字， 是一个对象类型
let c = 3;

console.log(a == b); //true
console.log(a === b); //false
console.log(b === c); //false