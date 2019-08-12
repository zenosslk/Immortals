## 页面上有一个输入框，两个按钮，A按钮和B按钮，点击A或者B分别会发送一个异步请求，请求完成后，结果会显示在输入框中。

            //dom元素
            var a = document.querySelector("#a")
            var b = document.querySelector("#b")
            var i = document.querySelector("#ipt");
            //全局变量p保存promie实例
            var P = Promise.resolve();
            a.onclick  = function(){
                //将事件过程包装成一个promise并通过then链连接到
                //全局的Promise实例上，并更新全局变量，这样其他点击
                //就可以拿到最新的Promies执行链
                P = P.then(function(){
                    //then链里面的函数返回一个新的promise实例
                    return new Promise(function(resolve,reject){
                        setTimeout(function(){
                            resolve()
                            i.value = "a";
                        },1000)
                    })
                })
            }
            b.onclick  = function(){
                P = P.then(function(){
                    return new Promise(function(resolve,reject){
                        setTimeout(function(){
                            resolve()
                            console.log("b")
                            i.value = "b"
                        },2000)
                    })
                })
            }

## 实现 mergePromise 函数，把传进去的函数数组按顺序先后执行，并且把返回的数据先后放到数组 data 中。

 