// pages/basics/basics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'cardboardfill',
      type: 'color',
      text: 'Color 颜色'
    }, {
      id: 2,
      icon: 'cardboardfill',
      type: 'text',
      text: 'Text 文字'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'shadow',
      text: 'Shadow 阴影'
    }, {
      id: 4,
      icon: 'cardboardfill',
      type: 'icon',
      text: 'Icon 图标'
    }, {
      id: 5,
      icon: 'cardboardfill',
      type: 'corner',
      text: 'Corner 边角'
    }, {
      id: 6,
      icon: 'cardboardfill',
      type: 'mp',
      text: '内外边距'
    }, {
      id: 7,
      icon: 'cardboardfill',
      type: 'button',
      text: 'Button 按钮'
      }, {
        id: 8,
        icon: 'cardboardfill',
        type: 'theme',
        text: 'Theme 主题'
      }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    switch (type) {
      case 'color':
        wx.navigateTo({
          url: '/pages/basics/background/background'
        })
        break;
      case 'text':
        wx.navigateTo({
          url: '/pages/basics/text/text'
        })
        break;
      case 'shadow':
        wx.navigateTo({
          url: '/pages/basics/shadow/shadow'
        })
        break;
      case 'icon':
        wx.navigateTo({
          url: '/pages/basics/icon/icon'
        })
        break;
      case 'corner':
        wx.navigateTo({
          url: '/pages/basics/corner/corner'
        })
        break;
      case 'mp':
        wx.navigateTo({
          url: '/pages/basics/mp/mp'
        })
        break;
      case 'button':
        wx.navigateTo({
          url: '/pages/basics/button/button'
        })
        break;
      case 'theme':
        wx.navigateTo({
          url: '/pages/basics/theme/theme'
        })
        break;
    }
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