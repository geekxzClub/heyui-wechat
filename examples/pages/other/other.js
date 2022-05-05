// pages/other/other.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'tree',
      type: 'tree',
      text_zh: '节点树',
      text_en: 'tree'
    },{
      id: 2,
      icon: 'h-radio',
      type: 'h-radio',
      text_zh: '未使用radio单选',
      text_en: 'h-radio'
    },{
      id: 3,
      icon: 'h-checkbox',
      type: 'h-checkbox',
      text_zh: '未使用checkbox多选',
      text_en: 'h-checkbox'
    },{
      id: 4,
      icon: 'h-scale',
      type: 'h-scale',
      text_zh: '卡尺',
      text_en: 'h-scale'
    },{
      id: 5,
      icon: 'slideverify',
      type: 'slideverify',
      text_zh: '滑动验证码',
      text_en: 'slideverify'
    },{
      id: 6,
      icon: 'calendar',
      type: 'calendar',
      text_zh: '自定义日历',
      text_en: 'calendar'
    },{
      id: 7,
      icon: 'slider',
      type: 'slider',
      text_zh: '滑块组件',
      text_en: 'slider'
    }]
  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/other/'+type+'/'+type
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