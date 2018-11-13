//index.js
const app = getApp();
const globalData = app.globalData;

Page({
  data: {
    auth: -1
  },
  onLoad(options) {
    // 高阶函数 scope
    // 用户之前就已经同意了，success this.getUserInfo
    // fail () => {} 还未同意
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0
      })
    });
  },
  getUserInfo(data) {
    // console.log(data);
    // 两种情况来到这1.未授权点击了按钮的， data里应该有userInfo 2.之前已经授权，globalData
    if (!globalData.nickname || globalData.avatarUrl) {
      wx.getUserInfo({
        success: (res) => {
          // success
          this.setData({
            nickname: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
          globalData.nickname = res.nickname
          globalData.avatarUrl = res.avatarUrl
          let openid = wx.getStorageSync('openid');
          if (openid) {

          } else {
            this.getUserOpenId(() => {

            }, () => {
              // 再登录一次
              this.setData({
                auth: 0
              })
            })
          }
        }
      })
    }
  },
  getUserOpenId(success, fail) {
    console.log('getUserOpenId');
    wx.login({
      success: (res) => {
        console.log(res);
        wx.cloud.callFunction({
          name: 'jscode2session',
          data: {
            code: res.code
          },
          success: (res) => {
            console.log(res);
            let { openid = '', session_key = '' } = res.result
            wx.setStorage({
              key: 'openid',
              data: openid
            })
          }
        })
        /* jscode2session(res.code)
          .then(res => {
            console.log(res);
          }) */
        // code
      }
    })
  },
  // 获取用户许可范围，得到用户许可的权限范围，
  // success  type function fail function 失败
  // es6
  getScope(success, fail, name = 'scope.userInfo') {
    // success('admin');
    wx.getSetting({
      success: (res) => {
        console.log(res);
        if (res.authSetting[name]) {
          // 用户允许获取基本信息
          typeof success === 'function' && success();
        } else {
          typeof fail === 'function' && fail()
        }
      }
    })
  }
})
