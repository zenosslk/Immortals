 function test(a, b) {
     console.log(a); //fun
     console.log(b);//und
     var b = 234;
     console.log(b);//234
     a = 123;
     console.log(a);//123

     function a() {}
     var a;
     b = 234;
     var b = function () {}
     console.log(a);//123
     console.log(b);//fun
 }
 test(1);


//  AO {
//      b: fun
//      a: fun
//  }