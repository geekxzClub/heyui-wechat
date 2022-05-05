// pages/laboratory/laboratory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    switch (type) {
      case 'banner':
        wx.navigateTo({
          url: '/heyui-laboratory/pages/'+type+'/'+type
        })
        break;
      case 'animation':
        wx.navigateTo({
          url: '/heyui-laboratory/pages/'+type+'/'+type
        })
        break;
      case 'table':
        wx.navigateTo({
          url: '/heyui-laboratory/pages/'+type+'/'+type
        })
        break;
      case 'barrage':
        wx.navigateTo({
          url: '/heyui-laboratory/pages/'+type+'/'+type
        })
        break;
    
      default:
        this.dialog()
        break;
    }
  },
  dialog(e) {
    wx.showModal({
      title: '亲爱的',
      content: '会员功能，暂未开放！',
      cancelText: '等待',
      confirmText: '再会',
      success: res => {
        if (res.confirm) {
         
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})