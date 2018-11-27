// new？实例化过程是怎么底层的？
// Otaku类  抽象概念 等待被new
function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games';
  console.log('this: ' + typeof this);
  console.log(this);
}

Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function() {    // 方式一
  console.log('I am ' + this.name);
}
/* Otaku.prototype = {    // 方式二 
  sayYourName: function() {
    console.log('I am ' + this.name);

  }
} */

// new
// 1.返回一个实例{}，拥有Otaku函数中加的哪些属性
// 2.实例可以访问到Otaku.prototype 中的属性
function objectFactor(fn, ...args) {
  var obj = new Object(),   // 1 返回新的空的对象
  Constructor = [].shift.call(arguments);
  console.log('arguments:' + arguments);
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  // 2 this要指向新的对象
  // 3 让Constructor执行
  //fn.apply(obj, ...args);
  console.log('obj: ' + typeof obj);
  console.log(obj);
  return obj;
}
// 1.构造函数 2.其余是构造函数需要的参数
const didi = objectFactor(Otaku, 'Kevin', 18);
// console.log(didi.name);
didi.sayYourName();
console.log('didi: ' + typeof didi);