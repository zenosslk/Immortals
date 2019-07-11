    function a() {
        function b() {
            var z = 234;
            console.log(i);  //123
        }
        var i = 123;
        return b;
    }
    var glob = 100;
    var demo = a();
    demo();
