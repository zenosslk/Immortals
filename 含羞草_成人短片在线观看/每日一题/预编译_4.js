      function a() {
          var num = 100;

          function b() {
              num++;
              console.log(num);
          }
          return b;
      }
      var demo = a();

      // 两个相同的方法-- 此时的值都是一样的
      demo(); //第一次执行num 100 ++   101
      demo(); //102