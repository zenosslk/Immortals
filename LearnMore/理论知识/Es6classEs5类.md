## Question: ES6中的class 和Es5 的类有什么区别？

Answer: 
      Es6 class 内部所有定义的方法都是不可枚举的
      Es6 class 必须使用new 调用
      Es6 class 不存在变量提升
      Es6 class 默认就是 严格模式
      Es6 class 子类必须在父类中调用super(),这样才有this对象
      Es5 中类继承的关系是相反的，现有子类的this , 然后用父类的方法应用在this 上