/* var str = 'Visit Microsoft!';
console.log(str.replace('Microsoft','alibaba'));
var money = '$若有雷同，$纯属巧合$';
console.log(money.replace(/\$/g,'人民币')); */

let html = `abc{{username}}edf000`;
let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html),RegExp.$1);