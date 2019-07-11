function test() {
    var num = 100;

    function a() {
        num++;
        console.log(num);
    }

    function b() {
        num--;
        console.log(num);
    }
    return [a, b];
}
var myArr = test();

// 两个不同的方法-- 此时的值都是一样的
myArr[0]();  //fun a()  ----//101
myArr[1]();  //fun b() --此时num已经是101 ---//100

 