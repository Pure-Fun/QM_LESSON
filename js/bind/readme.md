1. this 由函数调用方式
  普通函数 对象的方法 事件处理函数 闭包
2. 作用域手动指定
  call apply 区别是 call： 序列 
                   apply：数组
  bind 可以实现延后执行 返回一个新函数，并且内部的this指定为第一个参数
3. 手写一个bind
Function.prototype.bind = 

this:
  - apply
    手动指定函数的执行中的this为第一个参数
    bind是基于apply手动指定this为绑定对象的
  - 闭包区域
    this 由调用方式决定为被绑定的函数就是this
    self=this 在闭合空间一直存在
2.闭包
  - 函数嵌套函数，闭包中的变量一直可以被访问
3.函数式编程
  - bind返回一个新函数，解决了事件函数的this丢失问题。在react组件式开发或者是面向对象有需求，
    将事件的处理函数作为组件类的方法，即延迟调用，同时又手动指定this
    apply + 函数式
    return function() {
      self.apply(context)
    }
4.原型链
  - Function.prototype.bind