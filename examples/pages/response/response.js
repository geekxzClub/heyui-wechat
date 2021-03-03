// pages/response/response.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'cardboardfill',
      type: 'actionsheet',
      text: 'ActionSheet 底部弹出操作菜单'
    }, {
        id: 2,
        icon: 'cardboardfill',
        type: 'toast',
        text: 'Toast 提示'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'message',
      text: 'Message 消息提示'
    }, {
      id: 4,
      icon: 'cardboardfill',
      type: 'dialog',
      text: 'Dialog 模态框'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'actionsheet') {
      wx.navigateTo({
        url: '/pages/response/hsheet/hsheet'
      })
    }
    if (type == 'toast') {
      wx.navigateTo({
        url: '/pages/response/toast/toast'
      })
    }
    if (type == 'dialog') {
      wx.navigateTo({
        url: '/pages/response/dialog/dialog'
      })
    }    
    if (type == 'message') {
      wx.navigateTo({
        url: '/pages/response/message/message'
      })
    }
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