// var arraylike = {
//   0: 'ab',
//   1: 'abs',
//   length: 2
// }

// Array.prototype.push.call(arraylike, 'aaa', 'bbb')

// console.log(arraylike)

const arr = [12, 123, 123, 4, 56, 6]

const max = Math.max.apply(Math, arr)

const min = Math.min.apply(Math, arr)
console.log(max , min)