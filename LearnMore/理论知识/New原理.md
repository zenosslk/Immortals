## Question: new 的原理是什么？ 通过 new 的方式创建对象和通过字面量创建有什么区别？

Answer:
实现一个 new 操作符
解析 new 操作符做了哪些事
这个对象构造函数中的 this 可以访问挂载在 this 上的任意属性
这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数连接起来
返回原始值需要忽略，返回正常对象需要正常处理

    function New(fn , ...args){
      let reset=  {}
      
      <!-- 设置一个指定对象的原型 -->
      Object.setPrototypeof(reset , fn.prototype)

      <!-- 改变this指向 -->
      let res = fn.apply(reset , args)
      return reset instanceof Object? reset : res

    }
