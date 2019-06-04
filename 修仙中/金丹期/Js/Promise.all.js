// 要实现 Promise.all,首先我们需要知道 Promise.all 的功能：

// 如果传入的参数是一个空的可迭代对象，那么此promise对象回调完成(resolve),只有此情况，是同步执行的，其它都是异步返回的。
// 如果传入的参数不包含任何 promise，则返回一个异步完成.
// promises 中所有的promise都“完成”时或参数中不包含 promise 时回调完成。
// 如果参数中有一个promise失败，那么Promise.all返回的promise对象失败
// 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组