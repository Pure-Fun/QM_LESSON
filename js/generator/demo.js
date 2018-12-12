function* listPeople() {
  // yield 'init';

  let i = 0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
  return 'I love you!';
}

function* iterator() {
  yield* listPeople();
}
var people = iterator();

console.log(people.next());
console.log(people.next());
console.log(people.next());
console.log(people.next());
console.log(people.next());
/* 
while(!people.next().done) {
  console.log(people.next());
} */

/* do {
  console.log(people.next());
} while(!people.next().done); */

