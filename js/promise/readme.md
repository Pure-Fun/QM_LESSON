- 多个promise对象如何只用一条then链。解决异步问题， 让代码同步执行
  new Promise((resolve, rejet) => {
    异步执行的代码， resolve, reject

  })
  每个Promise对象都是可以thenable的
  在then的函数里
  then(res => res.json())
  res.json() 也是一个Promise
  显式的返回一个Promise对象，继续执行下去