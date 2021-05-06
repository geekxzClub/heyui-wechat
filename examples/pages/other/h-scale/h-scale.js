// pages/other/h-scale/h-scale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weight: 70,
    height: 180,
    styles: {
      line: '#dbdbdb',
      bginner: '#fbfbfb',
      bgoutside: '#ffffff',
      font: '#404040',
      fontColor: '#404040',
      fontSize: 16
    }
  },
  bindvalue(e) { //滑动回调
    var that = this;
    const value = e.detail.value;
    const key = e.currentTarget.id;
    const data = {};
    data[key] = value;
    that.setData(data);
  },
  bindvalueH(e) { //滑动回调
    var that = this;
    const value = e.detail.value;
    const key = e.currentTarget.id;
    const data = {};
    data[key] = value;
    that.setData(data);
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