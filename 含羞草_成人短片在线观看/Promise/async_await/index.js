// async function myFn(){
//     // await...
// }

// // 应用到箭头函数
// const myFn = async()=>{
//     // await...
// }

// function myFn(){
//     // await fn()
// }

// 在函数声明中async 关键字位于声明的前面。 在箭头函数中，async 关键字则位于 = 和() 中间
// async 函数还能作为对象的方法，或是像下面代码一样位于类中

// 作为对象的方法
// const obj = {
//     async getName(){
//         return fetch('http://www.965icu.com')
//     }
// }

// // 位于类中
// class Obj {
//     async getResource(){
//         return fetch('http://www.965icu.com')
//     }
// }
// 注意：类的构造函数和 getters/setters 不能作为async 函数

// async 函数总是返回Promise对象

// 写法一：
// async function fn() {
//     return 'hello'
// }

// fn().then((res) => {
//     console.log(res)
// })
// 写法二：由于async 返回的是一个Promise 对象。 
// async function fn() {
//     return Promise.resolve("hello")
// }
// fn().then(res => console.log(res))


// await 命令就像一个表达式一样， 当await 后面跟着一个Promise时， async函数遇到await会中止运行，
// 直到相应的Promise状态变为resolved 。 当await 后面跟的是原始值时，原始值会被传入Promise.resolve,
// 而转变为一个Promise 对象， 并且状态为 resolved

// const delayAndGetRandom = (ms) => {
//     return new Promise(resolve => setTimeout(() => {
//         const val = Math.trunc(Math.random() * 100)
//         resolve(val)
//     }, ms))
// }

// async function fn() {

//     const a = await 9
//     // 解析: const a = Promise.resolve(9)
//     const b = await delayAndGetRandom(1000)
//     const c = await 5
//     // await delayAndGetRandom(1000)
//     return a + b * c
// }

// fn().then(console.log)



// // async 是属于异步
// async function async1(){
//     console.log('async1 start'); //2
//     // 当await执行时async 暂停执行
//     await async2();

//     console.log('async1 end') //5
//  }
//  async function async2(){
//      console.log('async2') //3
//  }

//  console.log('script start');  //1
//  async1();
//  console.log('script end')  //4


// Promise写法 返回一个promise 对象
// const PromiseFunction = new Promise((resolve, reject) => {
//     const add = (a, b) => a + b
//     resolve(add(2, 2))
// })
// // console.log(PromiseFunction)
// PromiseFunction.then((Response) => {
//     console.log(Response)
// }).catch((err) => {
//     console.log(err)
// })



// 通过使用async await 来改写
async function PromiseFunction(a, b) {
    return a + b
}
PromiseFunction(1, 3).then(Response => {
    console.log(Response)
})