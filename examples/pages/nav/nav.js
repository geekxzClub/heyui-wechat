// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'cardboardfill',
      type: 'navbar',
      text: 'BavBar 顶部导航'
    }, {
      id: 2,
      icon: 'cardboardfill',
        type: 'tabbar',
        text: 'TabBar 底部导航'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'tabs',
      text: 'Tabs 选项卡'
    }
    // , {
    //   id: 4,
    //   icon: 'cardboardfill',
    //   type: 'menu',
    //   text: 'Menu 浮动菜单'
    // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'tabbar') {
      wx.navigateTo({
        url: '/pages/nav/tabbar/tabbar'
      })
    }
    if (type == 'navbar') {
      wx.navigateTo({
        url: '/pages/nav/navbar/navbar'
      })
    }
    if (type == 'tabs') {
      wx.navigateTo({
        url: '/pages/nav/tabs/tabs'
      })
    }
    if (type == 'menu') {
      wx.navigateTo({
        url: '/pages/nav/menu/menu'
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