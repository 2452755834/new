/*
 *@Description:9.介绍防抖节流原理、区别以及应用，并用JavaScript进行实现
 *@author: 卢少川 
 *@Date: 2021-10-12 17:35:22
 */
function debounce(fn, wait) {
  let timer = null
  const _this = this
  const arg = arguments
  return function () {
    clearTimeout(timer)
    setTimeout(() => {
      fn().apply(_this, arg)
    }, wait);
  }
}
debounce()

function throttle(fn, wait) {
  let timer = null
  const _this = this
  const arg = arguments
  return function () {
    if (timer) {
      return
    } else {
      timer = setTimeout(() => {
        timer = null
        fn.apply(_this, arg)

      }, wait);
    }
  }
}
throttle()

/*
 *@Description: 手写一个发布订阅
 *@author: 卢少川 
 *@Date: 2021-10-20 10:02:52
 */
class EventEmitter {
  constructor() {
    this.eventContainer = {}
  }
  on(name, fn) {
    (this.eventContainer[name] || (this.eventContainer[name] = [])).push(fn)
  }
  emit(name, ...args) {
    if (this.eventContainer[name]) {
      this.eventContainer[name].forEach(i => {
        i.call(this, ...args)
        // i(...args)
      })
    } else {
      console.log('方法不存在');
      //  return new Error('方法不存在')
    }
  }
  off(name, fn) {
    //  fn不传的话直接取消所有name下的订阅
    if (this.eventContainer[name]) {
      this.eventContainer[name] = fn ? this.eventContainer[name].filter(i => i != fn && i != fn.fn) : []
    }
  }
  // 先注册 执行后移除回调
  once(name, fn) {
    const one = (...args) => {
      fn.call(this, ...args)
      this.off(name, one)
    }
    // 由于：我们订阅事件的时候，修改了原回调函数的引用，所以，用户触发 off 的时候不能找到对应的回调函数
    // 所以，我们需要在当前函数与用户传入的回调函数做一个绑定，我们通过自定义属性来实现
    fn.fn = fn
    this.on(name, one)

  }
}
const example = new EventEmitter()
example.on('click', function (a) {
  console.log(a, this);
})
example.emit('click', 123)