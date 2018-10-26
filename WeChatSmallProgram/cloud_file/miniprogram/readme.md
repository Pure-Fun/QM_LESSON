- 文件上传
  云服务器  数据存储功能(mongodb) ， node(npm node v8.0>koa)运行环境及操作系统(linus centos)
  云服务 全部 sdk 化 数据存储 wx.cloud.database
  文件存储 wx.cloud.uploadFile
    文件流 出口(path) 入口(path) 硬盘
    wx.cloud.uploadFile({
        cloudPath:,   // 打开文件可写流
        filePath:,    // 打开文件可读流
    })
  云函数 wx.cloud.callFunction
  wx.cloud.websdk