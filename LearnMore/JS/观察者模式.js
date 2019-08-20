define(function (require, exports, module) {
    // 定义一个观察者
    var Observe = function () {
        var ob = {}
        return {
            on: function (type, fn) {
                if (ob[type]) {
                    ob[type].push(fn)
                } else {
                    ob[type] = [fn]
                }
            },
            trigger: function (type, val) {
                for (var i = 0; i < ob[type].length; i++) {
                    ob[type][i](val)
                }
            }
        }
    }
})