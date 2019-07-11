a = 100;

function demo(e) {
    function e() {}
    arguments[0] = 2;
    console.log('e' +'----'+ e); //2
    if (a) {
        var b = 123;

        function c() {}
    }
    var c;
    a = 10;
    var a;
    console.log('b' +'----'+ b); //unde
    f = 123;
    console.log('c' +'----'+ c); //unde
    console.log('a' +'----'+ a); //10
}

var a;
demo(1);
console.log('aa' +'----'+ a); //100
console.log('f' +'----'+ f); //123




// // 本地对象预编译_two
// AO {
//     b: 123
//     c: fun
//     a: unde
//     e: fun

// }

// // 全局对象
// GO {
//   a:unde
// }