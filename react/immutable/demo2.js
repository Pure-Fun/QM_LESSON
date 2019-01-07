var arr = ['old', 1,true, null, undefined];
var new_arr = arr.concat();
new_arr[0] = 'new';

console.log(new_arr, arr);