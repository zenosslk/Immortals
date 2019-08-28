## Promise
1、了解 Promise 吗？
2、Promise 解决的痛点是什么？
3、Promise 解决的痛点还有其他方法可以解决吗？如果有，请列举。
4、Promise 如何使用？
5、Promise 常用的方法有哪些？它们的作用是什么？
6、Promise 在事件循环中的执行过程是怎样的？
7、Promise 的业界实现都有哪些？
8、能不能手写一个 Promise 的 polyfill。

 

 1: 根据第一次的请求结果去执行第二次请求
 2: 解决回调地狱的问题， 回调地狱问题 : 代码臃肿 ， 可读性差 ， 耦合度高， 可维护性差， 只能在回调里处理异常

 3: 业界著名的Q  和 bluebird

 4:new Promise(请求1)   
        .then(请求2(请求结果1))
        .then(请求3(请求结果2))

 5: Promise.reject  
    Promise.prototype.then
    Promise.prototype.catch

 6:
## Question: 实现Promise.all 方法

Answer：
    Promise.all 功能
      Promise.all(iterable) 返回一个新的Promise实例.此实例在iterable参数内所有的Promise都fulfilled或者参数中不包含Promise 时，状态变成fulfilled；如果参数中Promise 有一个失败rejected，此实例回调失败，失败原因的是第一个失败Promise的返回结果

            let p = Promise.all([p1, p2, p3]);
      复制代码p的状态由 p1,p2,p3决定，分成以下；两种情况：
      （1）只有p1、p2、p3的状态都变成 fulfilled，p的状态才会变成 fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
      （2）只要p1、p2、p3之中有一个被 rejected，p的状态就变成 rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
      Promise.all 的特点

      Promise.all 的返回值是一个 promise 实例


      如果传入的参数为空的可迭代对象，Promise.all 会 同步 返回一个已完成状态的 promise
      如果传入的参数中不包含任何 promise,Promise.all 会 异步 返回一个已完成状态的 promise
      其它情况下，Promise.all 返回一个 处理中（pending） 状态的 promise.


      Promise.all 返回的 promise 的状态


      如果传入的参数中的 promise 都变成完成状态，Promise.all 返回的 promise 异步地变为完成。
      如果传入的参数中，有一个 promise 失败，Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
      在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组

      