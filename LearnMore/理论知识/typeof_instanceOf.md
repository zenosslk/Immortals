Question: typeof 是否正确判断类型 ? instanceof 呢？ instanceof 的实现原理？


Answer： typeof 能够正确的判断基本数据类型， 但是除了null ,    typeof null  输入出的是Object , typeof undefined  输入出的是undefined

    但是对象来说，typeof 不能正确的判断其类型 ， typeof 一个函数可以输出 'function' ,而除此之外
     输出的全是object ， 这种情况下， 我们无法准确的知道对象的类型

    instanceof 可以准确的判断复杂数据类型。 但是不能正确的判断基本数据类型

    instanceof 是通过原型链判断的， A instanceof B 在A的原型链中层层查找，是否有原型等于B.prototype