// yield* 表达式迭代操作数，并产生它返回的每个值。
// yield* 表达式本身的值是当迭代器关闭时返回的值（即done为true时）。

function* g1() {
  yield 2;
  yield 3;
  yield 4;
  return 'Kurry';
}


function* g2() {
  yield 1;
  yield* g1();
  yield 5;
  return 'Jordan';
}

// var iterator = g1();
var iterator = g2();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }