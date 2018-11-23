Page({
  data:{
      username:''
  },
  userNameInput(e){
      console.log(e.detail.value);
      this.setData({
          username: e.detail.value
      })
  },
  toInfo(){
      // console.log(this.detail.value)
      let isNav = false
      if (this.data.username) {
          wx.showToast({                //显示
              title: '数据加载中...',
              icon: 'loading',
              duration: 1000
          });
      }else{
         wx.showModal({                 //弹出模态框
             title: '请输入用户名...',
             showCancel:false,
             success: function(res){

             }
         })
      }
      wx.setStorage({                   //数据存储功能
          key: 'username',
          data: this.data.username
      }) 

      setTimeout(() => wx.switchTab({   //切换页面
        url:'../index/index'  
      }), 1000);
  }
})
