Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigate: [{
      url: "/pages/plugin/plugin",
      type: "switchTab",
      text: "扩展"
    }, {
      url: "/pages/about/index",
      type: "navigate",
      text: "Hey UI"
    }],
    copyright: " Copyright © 2021-2050 Hey UI.",
    component: [{
      id: 1,
      icon: 'basic',
      type: 'basics',
      text: '基础组件'
    }, {
        id: 2,
        icon: 'layout',
        type: 'layout',
        text: '布局组件'
    }, {
      id: 3,
      icon: 'view',
      type: 'view',
      text: '视图组件'
    }, {
      id: 4,
      icon: 'form',
      type: 'form',
      text: '表单组件'
    }, {
      id: 5,
      icon: 'animation',
      type: 'animation',
      text: '动画组件'
    }, {
      id: 6,
      icon: 'nav',
      type: 'nav',
      text: '导航组件'
    }, {
      id: 7,
      icon: 'response',
      type: 'response',
      text: '操作反馈'
    }, {
      id: 7,
      icon: 'response',
      type: 'response',
      text: '其他'
    } ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  goToView: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'basics') {
      wx.navigateTo({
        url: '/pages/basics/basics'
      })
    }
    if (type == 'layout') {
      wx.navigateTo({
        url: '/pages/layout/layout'
      })
    }
    if (type == 'view') {
      wx.navigateTo({
        url: '/pages/view/view'
      })
    }
    if (type == 'form') {
      wx.navigateTo({
        url: '/pages/form/form'
      })
    }
    if (type == 'animation') {
      wx.navigateTo({
        url: '/pages/animation/animation'
      })
    }
    if (type == 'nav') {
      wx.navigateTo({
        url: '/pages/nav/nav'
      })
    }
    if (type == 'response') {
      wx.navigateTo({
        url: '/pages/response/response'
      })
    }
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