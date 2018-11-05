canvas 游戏及特效
小程序里canvas 大小是px scale
绘图API 跟web有区别

ctx + 绘图API 将绘制的细节封装起来
画布 wx.createCanvasContext() 跟web不一样的地方，它的实现使用了 IOS/Android 的一套  封装到utils
canvas-id="effect"
ctx,
画布大小 解构 width scale height 
drawEffect(width, height, scale)

utils
  小程序里 canvas 特效只是一部分， 将它抽象封装，有利于将复杂部分隐去

