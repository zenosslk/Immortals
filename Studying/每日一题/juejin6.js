let c = {
  greeting: "Hey!"
};
let d;

d = c;

c.greeting = "Hello";
console.log(d.greeting); //Hello

// 在JavaScript中， 当设置它们彼此相等时， 所有对象都通过引用进行交互。
// 首先， 变量c为对象保存一个值。 之后， 我们将d指定为c与对象相同的引用。