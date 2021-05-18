// pages/other/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateString: "2021/5/6",
    defaultTime: "2021/5/18",
    spot: ['2021/5/6', '2021/5/9', '2021/8/20', '2021/9/12'],

    
    dateString2: "2021/1/6",
    defaultTime2: "2021/1/16",
    spot2: ['2021/1/6', '2021/1/9', '2021/1/20', '2021/1/12'],
  },
  
  dateChange(e) {
    // console.log("选中日期变了,现在日期是1", e.detail.dateString)
    this.setData({
      dateString: e.detail.dateString
    })
  },    
  dateChange2(e) {
    // console.log("选中日期变了,现在日期是2", e.detail.dateString)
    this.setData({
      dateString2: e.detail.dateString
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