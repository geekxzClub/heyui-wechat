// pages/response/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSuc: 0,
    showErr: 0,
    showWar: 0,
    showMes: 0,
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
  showMesSuc() {
    if (!this.data.show) {
      let that = this;
      this.setData({
        showSuc: 1
      })
      setTimeout(function () {
        that.setData({
          showSuc: 0
        })
      }, 2000)
    }
  },
  showMesErr() {
    if (!this.data.show) {
      let that = this;
      this.setData({
        showErr: 1
      })
      setTimeout(function () {
        that.setData({
          showErr: 0
        })
      }, 2000)
    }
  },
  showMesWar() {
    if (!this.data.show) {
      let that = this;
      this.setData({
        showWar: 1
      })
      setTimeout(function () {
        that.setData({
          showWar: 0
        })
      }, 2000)
    }
  },
  showMes() {
    if (!this.data.show) {
      let that = this;
      this.setData({
        showMes: 1
      })
      setTimeout(function () {
        that.setData({
          showMes: 0
        })
      }, 2000)
    }
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