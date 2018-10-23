//index.js
wx.cloud.init({
  env: 'curry-30-8aa560'
})

const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')

Page({
  onPullDownRefresh: function() {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      }), res => {
        console.log('数据更新完成')
        wx.stopPullDownRefresh();
      }
    })
  },
  onReachBottom: function() {
    console.log('上拉加载更多');
  },
  data: {
    page: 1,
    products: []
  },
  onLoad: function() {
    productsCollection
      .get()
      .then(res => {
        this.setData({
          products: res.data
        })
        
      })
  },
  click: function(event) {
    productsCollection.doc(event.currentTarget.dataset.id)
    .update({
      data: {
        view: _.inc(1)
      }
    })
  }
})