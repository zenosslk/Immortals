 function fn(a) {
     console.log(a); //fun

     var a = 123;
     console.log(a);//123

     function a() {}
     console.log(a);//123

     var b = function () {}
     console.log(b);//fun

     function d() {}
     console.log(d);//fun
 }
 fn(1);

//  AO {
//      a: fun
//      b: fun
//      d: fun
//     }
