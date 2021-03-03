// pages/response/hsheet/hsheet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionStatus: false,
    reportStatus: false, 
    navStatus: false,
    openStatus: false
  },

  // 打开ActionSheet组件
  openMysheet: function () {
    this.setData({
      actionStatus: true
    })
  },
  handleBtn: function () {
    wx.showToast({
      title: '我是普通按钮',
      icon: 'none'
    })
  },
  onActionHide: function () {
    console.log('ActionSheet关闭了')
  },



  // 打开开放能力
  openSheet: function () {
    this.setData({
      openStatus: true
    })
  },

  // 页面跳转能力
  navSheet: function () {
    this.setData({
      navStatus: true
    })
  },

  // 打开举报组件
  reportSheet: function () {
    this.setData({
      reportStatus: true
    })
  },
  reportBtn: function (e) {
    wx.showToast({
      title: '点击了~ '+e.currentTarget.dataset.type,
      icon: 'none'
    })
  },
  onActionHide: function () {
    console.log('ActionSheet关闭了')
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