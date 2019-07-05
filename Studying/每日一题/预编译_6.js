function ts(a, b) {
    console.log(a); //1 
    c = 0;
    var c;
    a = 3;
    b = 2;
    console.log(b); //2

    function b() {}

    function d() {}
    console.log(d); //fun
}
ts(1);

// AO {
//     a: 3
//     b: 2
//     c: 0
//     d: fun
// }
// GO {

// }