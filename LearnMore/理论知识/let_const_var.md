## Question: let . const . var 的区别是什么？

Answer:
    let const 是Es6的语法,let 定义变量， const定义常量
    let const 定义的变量不会出现变量提升，而var 定义的变量会提升
    let const 是JS中的块级作用域
    let const 不允许重复声明
    let const 定义的变量在定义语句之前，如果抛出错误会形成暂时性死区，而var 不会