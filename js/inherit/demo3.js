function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.sayHello = function() {
  console.log(`Hi, I am ${this.name},I am ${this.age} years old`);
}
var child1 = new Child('kevin', '18');
child1.colors.push('black');
child1.getName();
child1.sayHello();
console.log(child1.colors);
console.log(Child.prototype.constructor);