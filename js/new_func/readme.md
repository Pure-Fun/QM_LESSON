new 到底做了什么？
let p = new Person();
p 是Object类型，Person是函数类型 typeof
1. Parent 被执行，加了new后，Parent函数会在p的作用下执行，this指向p，
  构造函数里的属性被当做p的属性被创建
2. p.__proto__ 指向Parent.prototype  p继承了Parent.prototype中的属性和方法