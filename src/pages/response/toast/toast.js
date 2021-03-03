// pages/response/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    params: {
　　　success: 'success',
　　　context: '成功',
　　　time: 10000
　　　}
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
    //获得dialog组件 
    //页面定义的id
    this.toast = this.selectComponent("#toast");
  },
  showMesSuc() {
    this.toast.showToast({
      content: '自定义成功',
      icon: 'success'
    });
  },
  showMesErr() {
    this.toast.showToast({
      content: '自定义失败',
      icon: 'error'
    });
  },
  showMesWar() {
    this.toast.showToast({
      content: '自定义警告',
      icon: 'warning'
    });
  },
  showMyMes() {
    this.toast.showToast({
      content: '自定义图标类型toast',
      image: '/images/logo.jpg'
    });
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