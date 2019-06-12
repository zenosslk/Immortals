    Vue.extend
        参数: { Object } options
        用法: 
            使用基础Vue构造器,创建一个子类, 参数是一个包含组件选项的对象
            // data选项是特例,需要注意在Vue.extend()中它必须是函数
        
        // <div id='mount-point'></div>

        //创建构造器
        var Profile = Vue.extend({
            template:'<p> {{firstName}} {{lastName}} aka {{alias}} </p>',
            data:function(){
                return {
                    firstName:'Walter',
                    lastName:'White',
                    alias:'Heisenberg'
                }
            }
        })
        创建Profile实例,并挂载到一个元素上
        new Profile().$mount('#mount-point')
        
        结果: 
        <p>Walter White aka Heisenberg</p>
    
    
    Vue.nextTick([callback, context])
        参数: 
        { Function } [callback]
        {Object} [context]
        用法:
            在下次DOM更新循环结束之后执行延迟回调,在修改数据之后立即使用这个方法,
            获取更新后的DOM
        // 修改数据
        vm.msg = "Hello"
        //DOM还没有更新
        Vue.nextTick(function(){
            //DOM更新了
        })
        作为一个Promise使用
        Vue.nextTick().then(function(){
            //DOM更新了
        })


    Vue.set(target, propertyName/index)
        参数:
            { Object | Array }target
            {string |number} propertyName/index 
            { any } value 
        返回值: 设置的值
        用法:
            向响应式对象中添加一个属性, 并确保这个新属性同样是响应式,且触发视图更新,
            它必须用于响应式对象上添加新属性,因为Vue无法探测普通的新增属性
            this.myObject.newProperty = 'h1'

            注意对象不能是Vue实例,或者Vue实例的根数据对象
    

    Vue.delete(target , propertyName/index)
    参数:
        {Object | Array} target
        {string | number } propertyName/index 
    
    用法:
        删除对象的属性,如果对象是响应式的,确保删除能触发更新视图,这个方法主要用于避开Vue
        不能检测到属性被删除的限制,但是你应该很少会使用它
    目标对象不能是一个Vue实例或Vue实例的根数据对象

    Vue.directive(id, [difinition])
    参数:
        {string} id 
        {Function | Object} [definition]

    用法:
    注册或获取全局指令
    Vue.directive('my-directive' , {
        bind:function(){},
        inserted:function(){},
        update:function(){},
        componentUpdated:function(){},
        unbind:function(){}
    })
    
    // 注册(指令函数)

    Vue.directive('my-directive' , function(){
        //这里将会被`bind` 和`update`调用
    })

    //getter 返回已注册的指令
    var myDirective = Vue.directive('my-directive')


    Vue.filter(id , [definition])
    参数:
        { string }id 
        { Function }[definition]
    用法:
        注册或获取全局过滤器
        Vue.filter('my-filter' , function(value){
            // 返回处理后的值
        })
        // getter 返回已注册的过滤器
        var myFilter = Vue.filter('my-filter')
    
    Vue.component(id, [ definition ])
    参数:
        { string } id 
        { Function |Object } [definition]
    
    用法:
        注册或获取全局组件, 注册还会自定使用给定的id设置组件的名称

        // 注册组件,传入一个扩展过的构造器
        Vue.component('my-component' , Vue.extend({ /* ...*/ }))
        // 注册组件,传入一个选项对象(自定调用Vue.extend)
        Vue.component('my-component' , { /* ... */ })
        // 获取注册的组件
        var MyComponent = Vue.component('my-component')

    Vue.use(plugin)
    参数:
        { Object|Function } plugin
    用法:
        安装Vue.js插件,如果插件是一个对象,必须提供install方法,如果插件是一个函数,
        它会被作为install方法, install方法调用时,会将Vue作为参数传入

        // 该方法需要在调用new Vue()之前被调用
    
    Vue.mixin(mixin)
        参数:
            {Object}mixin 
        用法:
            全局注册一个混入,影响注册之后所有创建的每个Vue实例,插件作者可以使用混入,
            向组件注入自定义的行为,不推荐在应用代码中使用
    
    Vue.compile(template) 
        参数:
        {string }template
        用法:
        在render函数中编译模板字符串,只在独立构建时有效

        var res = Vue.compile('<div><span> {{msg}} </span></div>')

        new Vue({
            data:{
                msg:'hello'
            },
            render:res.render,
            staticRenderFns:res.staticRenderFns
        })

        Vue.observable(Object)

        参数:
            { Object } object 
        用法:
            让一个对象可响应,Vue内部会用它来处理data函数返回的对象
            返回的对象可以直接渲染函数和计算属性内,并且会在发生改变时触发相应的更新,
            也可以作为最小的跨足剑状态存储器,用于简单的场景

        const state = Vue.observable( { count:0 } )

        const Demo = {
            render(h) {
                return h('button'  ,{
                    on:{click :()=>{state.count++}}
                }, `count is :${state.count}`)
            }
        }

    

        Vue.version
            细节:
                提供字符串形式的Vue安装版本号, 这对社区的插件和组件来说非常有用,你可以根据不同的版本采取不同的策略
            
            用法:
                var version = Number(vue.version.split('.')[0])

                if(version === 2){
                    // Vue v2.x.x
                }else if(version === 1){
                    // Vue v1.x.x
                }else{
                    // Unsupported versions if Vue
                }