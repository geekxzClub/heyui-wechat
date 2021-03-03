// pages/view/verifycode/verifycode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '13298176895',
    veCode: new Array(),
    time: 6
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.againTime()
  },
  inputValue(e) {
    let value = e.detail.value;
    let arr = [...value];
    this.setData({ veCode: arr })
  },
  againTime() {
    let time = this.data.time;
    clearInterval(timing);
    let timing = setInterval(() => {
      if (time <= 0) {
        clearInterval(timing)
      } else {
        time--;
        this.setData({
          time: time
        })
      }
    }, 1000)
  },
  againTimeBtn() {
    this.setData({ time: 60 });
    this.againTime()
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