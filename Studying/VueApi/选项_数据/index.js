data
类型: Object | Function
限制: 组件的定义只接受function
详细: Vue
//     Vue实例的数据对象。Vue将会递归将data的属性转换为getter/setter,从而让data的属性能够响应数据变化。对象必须是纯粹的对象(含有零个或多个的key/value对)：浏览器API创建的原生对象,原型上的属性会被忽略。大概来说,data应该只能是数据-不推荐观察拥有状态行为的对象。
// 一旦观察过,不需要再次在数据对象上添加响应式属性。因此推荐在创建实例之前,就声明所有的根级响应式属性。
// 实例创建之后,可以通过vm.$data访问原始数据对象。Vue实例也代理了data对象上所有的属性,因此访问vm.a等价于访问vm.$data.a。
// 以_或$开头的属性不会被Vue实例代理,因为它们可能和Vue内置的属性、API方法冲突。你可以使用例如vm.$data._property的方式访问这些属性。
// 当一个组件被定义,data必须声明为返回一个初始数据对象的函数,因为组件可能被用来创建多个实例。如果data仍然是一个纯粹的对象,则所有的实例将共享引用同一个数据对象！通过提供data函数,每次创建一个新实例后,我们能够调用data函数,从而返回初始数据的一个全新副本数据对象。
// 如果需要,可以通过将vm.$data传入JSON.parse(JSON.stringify(...))得到深拷贝的原始数据对象。
实例:
    var data = {
        a: 1
    }

// 直接创建一个实例
var vm = new Vue({
    data: data
})

vm.a === vm.$data.a //true

// Vue.extend()
var Component = Vue.extend({
    data: function () {
        return {
            a: 1
        }
    }
})




props 
    // 类型:Array<string>|Object
//     详细：
// props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
// 你可以基于对象的语法使用以下选项：
// type: 可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。Prop 类型的更多信息在此。
// default: any
// 为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。
// required: Boolean
// 定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。
// validator: Function
// 自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。你可以在这里查阅更多 prop 验证的相关信息。

// 简单语法
Vue.component('props-demo-simple', {
    props: ['size', 'myMessage']
  })
  // 对象语法，提供验证
  Vue.component('props-demo-advanced', {
    props: {
      // 检测类型
      height: Number,
      // 检测类型 + 其他验证
      age: {
        type: Number,
        default: 0,
        required: true,
        validator: function (value) {
          return value >= 0
        }
      }
    }
  })