// pages/basics/theme/theme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basics: 0,
    basicsList: [{
      icon: 'usefullfill',
      name: '开始'
    }, {
      icon: 'radioboxfill',
      name: '等待'
    }, {
      icon: 'roundclosefill',
      name: '错误'
    }, {
      icon: 'roundcheckfill',
      name: '完成'
    }, ],
  },
  // steps
  basicsSteps() {
    this.setData({
      basics: this.data.basics == this.data.basicsList.length - 1 ? 0 : this.data.basics + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)
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