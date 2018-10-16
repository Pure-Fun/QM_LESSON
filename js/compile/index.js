const html = `
  <view>
    <text>{{username}}</text>
  </view>
`;

// 在模板中查找{{key}}
// 替换成 username 变量的值 replace
function compile(html) {
    let username = '唐唐';
    if (/\{\{(.*)\}\}/.test(html)) {
        let reg = /\{\{(.*)\}\}/gm;
        html = html.replace(reg,username);
    }
    return html;
}
const compiledHTML = compile(html);
console.log(compiledHTML);



/* const html = `
  <view>
    <text>{{username}}</text>
  </view>
`;
let obj = {
  'username': '唐唐'
};
// {{}}
// 在模板中，查找{{key}}  
// 替换成 username 变量的值  replace 
function compile(html) {
  // 匹配占位符
  if (/\{\{(.*)\}\}/.test(html)) {
    let key = RegExp.$1;
    html = html.replace(/\{\{(.*)\}\}/gm, obj[key]);
  }
  // test => $1 => key(username) => replace
  // {{.*}} => key的值 
  // 正则表达式
  // 找到key
  // replace  正则表达式 ，  变量的value 
  return html;
}

const compiledHTML = compile(html);
console.log(compiledHTML); */
