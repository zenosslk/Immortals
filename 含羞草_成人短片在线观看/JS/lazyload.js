//   getBoundingClientRect
//   DOM 元素包含一个getBoundingClientRect 方法， 执行该方法返回当前DOM节点相关的Css边框集合， 其中有一个Top 属性代表当前DOM 节点距离浏览器窗口顶部的高度， 只需判断top值是否小于当前浏览器窗口的高度(window.innerHeight), 若小于说明已经进入用户视野， 然后替换为真正的图片即可
//   另外使用getBoundingClientRect 作图片懒加载需要注意三点
//   1。 因为需要监听scroll 事件， 不停的判断top 的值和浏览器高度的关系， 请对监听事件进行函数节流
//   2. 当屏幕首次渲染时， 不会触发scroll 事件， 请主动调用一次事件处理程序， 否则若用户不滚动则首屏的图片会一直使用懒加载的默认图片
//   3. 当所有需要懒加载 的图片都被加载完， 需要移除事件监听， 避免不必要的内存占用
// ----------------------------------------------------------------------------------------------------------------------------
// intersectionObserver
// intersectionObserver作为一个构造函数， 传入一个回调函数作为参数， 生成一个实例observer，
// 这个实例有一个observe方法用来观察指定元素是否进入了用户的可视范围， 随即触发传入构造函数中的回调函数

// 同时给回调函数传入一个entries 的参数， 记录着这个实例观察的所有元素的对象， 其中intersectionRatio 属性表示图片已经进入可视范围百分比， 大于0 表示已经有部分进入了用户视野

// 此时替换为真实的图片， 并且调用实例的unobtrusive 将这个img 元素从这个实例的观察列表的去除


let imgList = [...document.querySelectorAll("img")]
let length = imgList.length

let lazyLoad = (() => {
  let count = 0
  return () => {
    let deleteList = []
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src
        deleteList.push(index)
        count++
        if (count === length) {
          document.removeEventListener('scroll', lazyLoad)
        }
      }
    })
    //删除已加载完毕的图片
    imgList = imgList.filter((_, index) => !deleteList.includes(index))
  }
})()

//  这里调用了throttle 的节流函数
lozyload1 = throttle(lozyload1, 100)
document.addEventListen("srcoll", lozyload1)
//  手动执行一次， 加载首屏图片
lozyload1()


// 节流一段时间执行一次
function throttle(fn, delay) {
  let previous
  return function (arg) {
    let that = this
    let NewData = new Date()
    if (NewData - previous > delay) {
      fn.call(that, arg)
      previous = NewData
    }
  }
}



let imgList2 = [...document.querySelectAll("img")]
let lozyload2 = (() => {
  // 实例化observer
  let observer = new IntersectionObserver(entries => {
    // entries 存储着所有观察元素的intersectionObserverEntry 配置
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src
        //取消观察
        observer.unobserve(entry.target)
      }
    })
  })

  imgList2.forEach(img => {
    observer.observe(img)
  })
})

lozyload2()