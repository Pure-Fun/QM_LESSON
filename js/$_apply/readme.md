-   window.onload 事件会在页面或图像加载完成后立即触发（即所有元素的资源都下载完毕）。
    如果页面上有许多图片、音乐或falsh，onload事件会迟迟无法触发。
-   所以出现了DOM Ready事件. 此事件在DOM文档结构准备完毕后触发, 即在资源加载前触发。

- 性能优化 
  script 标签具有阻塞性， 利用 src 下载代码，或行内的 js 并执行 最好不要放在头部
  页面的显示， painting 绘制 排列 重绘重排 
  生命周期 window.onload  document.  DOMContentLoaded

  js 开始 不要阻止dom的绘制 也不要等到 window onload
  DOMContentloaded dom read img

- $(callback)
  jquery $第一种使用用途是 dom ready 事件
  $(function() {
      //js here
  })
  $(selector) 用于选择元素
  动态页面
  可以不用等数据取出来， 先显示页面， 再去取数据， 速度较快。