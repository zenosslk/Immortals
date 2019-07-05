// https: //github.com/lydiahallie/javascript-questions/blob/master/README-zh_CN.md  项目地址


function sayHi() {
  console.log(name); //und
  console.log(age); //ReferenceError
  var name = "Lydia";
  let age = 21;
}

sayHi();


// 解析: var 变量声明提升
// let 没有