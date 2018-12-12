var fetch = require('node-fetch');
function* gen() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result);
  console.log(result.bio);
}

var g = gen();
/* console.log(g.next());
console.log(g.next({ bio: 'love'}));
console.log(g.next()); */

var result = g.next();
console.log('result:' + result);

result.value
  .then(function(data) {
    // console.log(data);
  return data.json();
}).then(data => {
  console.log(g.next(data));
})
