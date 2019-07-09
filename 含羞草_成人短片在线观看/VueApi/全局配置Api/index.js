    silent //#######
    //     类型:Boolean 
    //     默认值：false 
    //     用法:vue.config.silent = true
    取消Vue所有的日志与警告

    optionMergeStrategies //#######
    // 类型: { [key:string] : Function }
    // 默认值: {}
    // 用法: 
    Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
        return child + 1
    }
    const Profile = Vue.extend({
        _my_option: 1
    })
    // Profile.options._my_option = 2
    自定义合并策略的选项
    合并策略选项分别接收在父实列和子实列上定义该选项的值作为第一个和第二个参数, Vue实列上下文被作为第三个参数传入

    devtools //#######
    类型: Boolean
    默认值为: true(生产版为false)
    // 用法 --需要在加载Vue之后,立即同步设置以下内容
    Vue.config.devtools = true
    // 作用：
    配置是否允许vue - devtools检查代码, 开发版本默认为true, 生产版本默认为false,
        生产版本为true可以启用检查


    errorHandler //##########
    类型: Function
    默认值: undefined
    //   用法:
    Vue.config.errorHandler = function (err, vm, info) {
        //handle error
        // info 是vue 特定的错误信息 , 比如错误所在生命周期钩子
    }
    //   作用：
    指定组件的渲染和观察期间未捕获错误的处理函数, 这个处理函数被调用时, 可获取错误信息和Vue实例

    warnHandler
    类型: Function
    默认值: undefined
    用法:
        Vue.config.warnHandler = function (msg, vm, trace) {
            // trace 是组件的继承关系追踪
        }
    为Vue的运行时警告赋予一个自定义处理函数, 注意这只会在开发者环境下生效, 在生产环境下它会被忽略

    ignoredElements
    // 类型: Array < string | RegExp >
    默认值: []
    用法:
        Vue.config.ignoredElements = [
            'my-custom-web-component',
            'another-web-component',
            // 用一个 `RegExp` 忽略所有的 ·icon-·开头的元素
            /^ion-/
        ]
    作用:
        // 须使Vue忽略在Vue之外的自定义元素(e.g. 使用了Web Components APIs)。
        否则, 他会假设你忘记注册全局组件或者拼错了组件名称, 从而抛出一个关于Unknown_custom_element警告

    keyCodes
    // 类型: {[key: string]: number | Array < number >}
    默认值: {}
    用法:
        Vue.config.keyCodes = {
            v: 86,
            f1: 112,
            mediaPlayPause: 179,
            'media-play-pause': 179,
            up: [38, 87]
        }
    // <input type='text' @keyup.media-play-pause = 'method'>
    作用:
        给v - on自定义键位别名
    
    performance 
     类型:Boolean 
     默认值:false 
     用法:
        设置为true以在浏览器开发工具的性能/时间线面板中启用对组件初始化,编译,渲染和打补丁的性能追踪,
        只适用于开发模式和支持performance.markAPI的浏览器上

    productionTip
        类型:Boolean
        默认值:true 
        用法: 
            设置为false以阻止Vue在启动时生成生产提示