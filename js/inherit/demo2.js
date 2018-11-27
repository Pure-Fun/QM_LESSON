function Person() {
  this.names = ['kevin', 'daisy'];
}

// this 跟函数运行的方式有关
function Child() {
  Person.call(this);
}

// 子类拥有父类上的属性
var child1 = new Child();
child1.names.push('道格拉斯');
console.log(child1.names);

var child2 = new Child();
console.log(Person.prototype);