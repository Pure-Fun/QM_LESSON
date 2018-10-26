//index.js
const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
const app = getApp()

Page({
  data: {
    userList: []
  },
  onLoad: function () {
    userInfo.get().then(res => {
      this.setData({
        userList: res.data
      })
    })
  },
  getUserInfo: function (result) {
    // console.log(result);
    // openId 用户独有，云函数可以拿到，有几个接口
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log(res);
        let openid = res.result.openId
        userInfo.where({
          _openid: openid
        }).count().then(res => {
          console.log(res);
          if (res.total == 0) {
            userInfo.add({
              data: result.detail.userInfo
            }).then(res => {
              console.log(res);
            })
          } else {
            wx.showToast({
              title: '不能重复添加'
            })
          }
        })
        // console.log(res);
      }
    })
  },
  onShareAppMessage: (res) => {
    return {
      title: 'App',
      path: '/pages/index/index',
      imageUrl: 'https://636f-codingdream-74b4e5-1256758450.tcb.qcloud.la/687434.png',
      success: res => {
        console.log('转发成功');
      },
      fail: res => {
        console.log('转发失败');
      }
    }
  }
})