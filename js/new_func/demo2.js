function Parent(name) {
  this.name = name; 
}
let p = new Parent('Kurry');
console.log(Parent.prototype);    // Parent {}
console.log(p.__proto__ );    // Parent {}
console.log(p.__proto__ == Parent.prototype);   // true
console.log(Parent.__proto__);    // [Function]