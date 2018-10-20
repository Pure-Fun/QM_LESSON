//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hadLoading: false,
    pages: 1,
    pageSize: 4,
    totalSize: 0,
    hasMore: true,
    days: 3,
    articleList: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.requestArticle()
    },
    requestArticle: function() {
      wx.request({
      url: 'https://www.easy-mock.com/mock/5bca925fe6742c1bf8220bf0/ikcamp/list',
      success: (res) => {
        console.log(res.data.data);
        let list = this.data.articleList;
        list = [...list,...res.data.data];
        list.push(res.data.data[this.data.page-1]);
        this.setData({
          hiddenLoading: true,
          articleList: list
        })
      }
    })
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom() {
    if (this.data.hasMore) {
      let nextPage = this.data.page + 1;
      this.setData({
        pages: nextPage
      });
      this.requestArticle();
    }
    console.log('到页面底部了')

  }
})
