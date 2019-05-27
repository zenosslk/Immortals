//  function bar() {
//      return foo;
//      foo = 10;

//      function foo() {

//      }
//      var foo = 11;
//  }
//  console.log(bar());
//  return f() {}
console.log(bar());  //11

function bar() {
    foo = 10;

    function foo() {}
    var foo = 11;
    return foo;
}
 