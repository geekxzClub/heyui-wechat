// pages/other/slider/slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slider1: 50,
    slider2: 50,
    slider3: 50,
    slider4: 50,

    min: 2,  // 最小限制 
    max: 10,   // 最大限制
    value: 8, // 当前value
  },
  changeSlider1(e) {
    this.setData({ slider1: e.detail.value })
  },
  changeSlider2(e){
    this.setData({ slider2: e.detail.value})
  },
  changeSlider3(e) {
    this.setData({ slider3: e.detail.value })
  },
  changeSlider4(e) {
    this.setData({ slider4: e.detail.value })
  },

  // 拖动过程中触发的事件
  sliderchanging(e){
    var value = e.detail.value;
    this.setData({ value: value })
  },
  // 完成一次拖动后触发的事件
  sliderchange(e){
    var value = e.detail.value;
    this.setData({ value: value })
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