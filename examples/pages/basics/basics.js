// pages/basics/basics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'color',
      icons: 'color',
      type: 'color',
      text_en: 'Color',
      text_zh: '颜色'
    }, {
      id: 2,
      icon: 'text',
      icons: 'text',
      type: 'text',
      text_zh: '文字',
      text_en: 'Text'
    }, {
      id: 3,
      icon: 'shadow',
      icons: 'shadow',
      type: 'shadow',
      text_zh: '阴影',
      text_en: 'Shadow'
    }, {
      id: 4,
      icon: 'icon',
      icons: 'icon',
      type: 'icon',
      text_zh: '图标',
      text_en: 'Icon'
    }, {
      id: 5,
      icon: 'corner',
      icons: 'corner',
      type: 'corner',
      text_zh: '边角',
      text_en: 'Corner'
    }, {
      id: 6,
      icon: 'mp',
      icons: 'mp',
      type: 'mp',
      text_zh: '内外边距',
      text_en: 'Margin-Padding'
    }, {
      id: 7,
      icon: 'button',
      icons: 'button',
      type: 'button',
      text_zh: '按钮',
      text_en: 'Button'
      }, {
        id: 8,
        icon: 'theme',
        icons: 'theme',
        type: 'theme',
        text_zh: '主题',
        text_en: 'Theme'
      }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/basics/'+type+'/'+type
    })
  },



  goToText: function () {
    wx.navigateTo({
      url: '/pages/basics/text/text'
    })
  },
  goToShadow: function () {
    wx.navigateTo({
      url: '/pages/basics/shadow/shadow'
    })
  },
  goToCorner: function () {
    wx.navigateTo({
      url: '/pages/basics/corner/corner'
    })
  },
  goToMP: function () {
    wx.navigateTo({
      url: '/pages/basics/mp/mp'
    })
  },
  goToButton: function () {
    wx.navigateTo({
      url: '/pages/basics/button/button'
    })
  },
  goToIcon: function () {
    wx.navigateTo({
      url: '/pages/basics/icon/icon'
    })
  },
  goToTheme: function () {
    wx.navigateTo({
      url: '/pages/basics/theme/theme'
    })
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