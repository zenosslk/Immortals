// img标签的src会触发http请求， 是一种通过浏览器的外部资源加载的表现， 同时还有script标签等（ 同时可应用于jsonp）
// 图片距离顶部高度： el.offsetTop
// 视窗高度： window.innerHeight
// 滚动条滚动的高度： el.scrollTop(el是滚动条所在的元素， 有可能是body)



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
        if (count === num) {
          document.removeEventListener('scroll', lazyLoad)
        }
      }
    })
    imgList = imgList.filter((_, index) => !deleteList.includes(index))
  }
})()



// 节流一段时间执行一次
// function throttle(fn, delay) {

//   let previous
//   return function (arg) {
//     let that = this
//     let NewData = new Date()
//     if (NewData - previous > delay) {
//       fn.call(that, arg)
//       previous = NewData
//     }
//   }
// }