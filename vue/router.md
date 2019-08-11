<!-- 字符串，这里的字符串是路径path 匹配，不是router配置里的name -->

## this.\$router.push('home)

<!-- 对象 -->

## this.\$router.push({path:'home'})

<!-- 命名的路由 这里会变成 /user/123 -->

## this.\$router.push({name:'user' , params:{userId:123}})

<!-- 带查询参数 ， 变成/register?plan=private -->

## this.\$router.push({path:'register'} , query:{plan:'private'})

<!-- 全局钩子函数 -->

## router.beforeEach((to , from , next)=>{
  <!-- next()  -->
})

## router.afterEach((to ,from ,next)=>{})

<!-- 路由独享钩子函数 -->
##const router = new VUeRouter({
  routes:[
    {
      path:'/foo',
      component:Foo,
      beforeEnter:(to ,from , next)=>{}
    }
  ]
})

<!-- 组件内钩子函数 -->

## const Foo ={
  template:'',
  beforeRouterEnter(to , from , next){
    <!-- 在渲染该组件的对应路由被confirm前调用
    不能获取组件的实例this
    因为当钩子执行前，组件实例还没被创建 -->
  },
  beforeRouterUpdate(to, from, next){
    <!-- 在当前路由改变，但是该组件被复用时调用 -->
    <!-- 举例来说，对于一个带有动态参数路径/foo/:id ,在/foo/1 和 /foo/2 之间进行跳转的时候，
    由于会渲染同样的Foo组件， 因此组件实例被复用， 而这个钩子就会在这个情况下被调用
    可以访问this -->
  },
  beforeRouteLeave(to, from ,next){
    <!-- 导航离开组件的对应路由调用
    可以访问组件this -->
  }
}