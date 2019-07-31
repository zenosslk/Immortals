## Question: 异步加载JS脚本的方法有哪些？


Answer: <script><script> 标签中增加async 或者defer 属性，脚本就会异步加载

    defer 和 async 的区别在于:  
        defer: 要等到整个页面在内存中正常渲染结束，在window.onload 之前执行
        async: 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后继续渲染

        如果有多个defer 脚本，会按照他们在页面出现的顺便加载
        多个async 脚本不能保证加载顺序