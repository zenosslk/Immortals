// 22. cool_secret可以访问多长时间 ?
sessionStorage.setItem("cool_secret", 123);
// A： 永远， 数据不会丢失。
// B： 用户关闭选项卡时。
// C： 当用户关闭整个浏览器时， 不仅是选项卡。
// D： 用户关闭计算机时。