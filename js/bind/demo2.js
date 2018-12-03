Function.prototype.bind2 = function(context) {
  // console.log('bind2');
  // 1.返回被绑的函数
  // 2.新函数在执行的时候 this指向context
  
  var self = this;
  console.log(arguments)
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    console.log(arguments)
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, args.concat(bindArgs));
    console.log(self);
  }
}
var obj = {
  val: 1
}
const foo = function(name, age) {
  console.log(this.val);
  console.log(name);
  console.log(age);
}
const fooBar = foo.bind2(obj, 'daisy', 18);
// foo.bind2();
fooBar(12);   // 函数名 函数体