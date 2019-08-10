 ## Question： Call 和Apply 有什么区别？ call 。 apply 和bind的内部是如何实现的？

 Answer: 都是改变this 指向的，其中call (this, 1)
                                apply(this , [1, 2])



## call 和apply 的应用场景

1. 判断数据类型
    Object.prototype.toString用来判断类型 ， 借用它我们几乎可以判断所有类型的数据


    function isType(data , type){
      const typeObj = {
        '[object String]':'string',
        '[object object]':'object',
        '[object Date]':'date'
      }

      let name = Object.prototype.toString.call(data)
      let typeName = typeObj[name] || '未知类型'
      return typeName === type
    }

    console.log(isType(new Date() , 'date'))  //true

2. 类数组借用数组的方法：
    var arraylike = {
      0: 'ab',
      1: 'abs',
      length:2
    }

    Array.prototype.push.call(arraylike, 'aaa' , 'bbb')
console.log(arraylike) //{ '0': 'ab', '1': 'abs', '2': 'aaa', '3': 'bbb', length: 4 }


3.  apply 获取数组最大值最小值

apply 直接传递数组要调用方法的参数，也省一步展开数组，比如使用Math.max , Math.min 来获取数组的最大值/最小值

const arr = [12,123,123,4,56,6]

const max = Math.max.apply(Math , arr)  //123

const min = Math.min.apply(Math , arr) //4