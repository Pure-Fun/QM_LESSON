//index.js
Page({
    // 云函数是独立的node环境,新建,安装依赖,每次修改都要重新上传
  http: function() {
    // 云函数的执行是异步，main函数 async 在这个函数内部将发生费时的事情 ajax,文件上传
    wx.cloud.callFunction({
      name: "http",
      data: { a: 1 }
    }).then(res => {
      console.log(res.result);
    })
  }
})
