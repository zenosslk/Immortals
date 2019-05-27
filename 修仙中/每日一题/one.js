var number = 2;

var obj = {
    number: 4,
    fn1: (function () {
        this.number *= 2;
        number = number * 2;
        var number = 3;
        return function () {
            this.number *= 2;
            number *= 3;
            console.log(number);
        }
    })(),

    fn2: function () {
        this.number *= 2;
    }
};

var fn1 = obj.fn1;
// console.log(fn1)
// console.log(number); //2
// fn1(); //9
// obj.fn1(); //9
// obj.fn2();
// console.log(window.number);  //4
// console.log(obj.number);  //8