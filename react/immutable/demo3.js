var arr = [{old: 'old'}, ['old']];
console.log(arr[0]);
var new_arr = JSON.parse(JSON.stringify(arr));
new_arr[0].old = 'new';
new_arr[1][0] = 'new';

console.log(new_arr, arr);