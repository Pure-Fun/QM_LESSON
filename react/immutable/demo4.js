var arr = [function() {
  console.log(arr);
}, {
  b: function() {
    console.log(b);
  }
}]

var new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr);