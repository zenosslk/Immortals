## 直接给一个数组项赋值，Vue 能检测到变化吗？

由于JavaScript 的限制， Vue 不能检测到以下数组的变动:

当你利用索引直接设置一个数组项时， 例如: vm.itemsp[indexOfItem] = newValue
当你修改数组的长度时， 例如: vm.items.length = newLength

为了解决第一个问题，Vue提供下操作方法:

1.  Vue.set(vm.items , indexOfItem , newValue)
2.  vm.$set(vm.items , indexOfItem , newValue)
3.  vm.items.splice(indexOfItem , 1, newValue)

为了解决第二个问题
1. vm.items.splice(newLength)