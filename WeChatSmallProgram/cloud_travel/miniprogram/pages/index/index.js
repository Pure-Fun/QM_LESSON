//index.js

wx.cloud.init({

})
const db = wx.cloud.database();
Page({
  data: {
    ads: [],
    item: {
      user: {
        avatar: '',
        nickname: '鲁宾逊漂流记',
        summary: '海上升起的太阳'
      }
    }
  },
  onLoad: function() {
    db.collection('ads').get({
      success: res => {
        this.setData({
          ads: res.data
        })
        wx.cloud.callFuncttion({
          name: "getTravelInfo",
          data: {
            count: 5,
            startIndex: 0
          },
          success: res => {
            console.log(res);
          }
        })
      }
    })
  }
})
