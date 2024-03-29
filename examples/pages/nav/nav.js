// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'navbar',
      icons: 'combined-tabs',
      type: 'navbar',
      text_zh: '顶部导航',
      text_en: 'BavBar'
    }, {
      id: 2,
      icon: 'tabbar',
      icons: 'tabbar',
      type: 'tabbar',
      text_zh: '底部导航',
      text_en: 'TabBar'
    }, {
      id: 3,
      icon: 'tabs',
      icons: 'tab',
      type: 'tabs',
      text_zh: '选项卡',
      text_en: 'Tabs'
    }, {
      id: 4,
      icon: 'category',
      icons: 'classnames',
      type: 'category',
      text_zh: '顶部分类菜单',
      text_en: 'Category'
    }, {
      id: 5,
      icon: 'category',
      icons: 'classnames',
      type: 'category-2',
      text_zh: '侧边分类菜单',
      text_en: 'category-2'
    }, {
      id: 6,
      icon: 'footer',
      icons: 'navbar',
      type: 'footer',
      text_zh: '底部导航',
      text_en: 'footer'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/nav/'+type+'/'+type
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