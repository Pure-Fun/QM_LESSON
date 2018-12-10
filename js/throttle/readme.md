Ajax Google Suggestion
猜出用户想搜索的内容
用户边输入(input)边建议(ajax 后端去匹配返回一个list 做一个dom编程)
react onChange 事件 实际上是 input 事件
频繁的被触发 如何减少一些 不会影响效果，
节流 在一段事件内只执行一次(300ms)
限制事件执行的方式 有 防抖和节流两种方式

使用lodash _.throttle(fn, time);

onmousemove ontouchmove 频繁触发多次
throttle 在一定时间内只执行一次

1. 使用时间戳 + 闭包
2. 使用定时器

区别：实现的方式，体验的细节，时间戳由于是先为0 previous now-previous > wait 先执行
  setTimeout timeout null, 是在wait到点时执行，后执行