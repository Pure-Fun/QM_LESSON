var fs = require('fs');

try {
  // Promise 也可以then链
  const fileAPromise = new Promise(
    (reslove, reject) => {
      fs.readFile('./a.txt', 'utf8',
      function(err, data) {
        if (err) {
          reject(err)
        } else {
          reslove(data)
        }
      })
  });
  const fileBPromise = new Promise(
    (reslove, reject) => {
      fs.readFile('./b.txt', 'utf8',
      function(err, data) {
        if (err) {
          reject(err)
        } else {
          reslove(data)
        }
      })
  });
  const fileCPromise = new Promise(
    (reslove, reject) => {
      fs.readFile('./c.txt', 'utf8',
      function(err, data) {
        if (err) {
          reject(err)
        } else {
          reslove(data)
        }
      })
  });
  fileAPromise
    .then(data => {
      console.log('文件A', data);
      return fileBPromise
    })
    .then(data => {
      console.log('文件B', data);
      return fileCPromise
    })
    .then(data => {
      console.log('文件C', data);
    })
    .catch(err => {
      console.log(err)
    })
  /* const dataA = fs.readFileSync('./a.txt', 'utf8');    // 第一种读取文件的方法
  const dataB = fs.readFileSync('./b.txt', 'utf8');
  const dataC = fs.readFileSync('./c.txt', 'utf8');
  console.log(dataA, dataB, dataC); */

  /* fs.readFile('./a.txt', 'utf8',   // 第二种读取文件的方法 
  function(err, data) {
    console.log(data);
    fs.readFile('./b.txt', 'utf8', 
    function(err, data) {
      console.log(data);
      fs.readFile('./c.txt', 'utf8', 
      function(err, data) {
        console.log(data);
      })
    })
  }); */
} catch(e) {
  console.error('读取文件出错: ' + e.message);
}
