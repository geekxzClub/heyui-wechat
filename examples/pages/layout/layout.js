// pages/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'flex',
      type: 'flex',
      text_zh: '弹性布局',
      text_en: 'Flex'
    }, {
      id: 2,
      icon: 'grid',
      type: 'grid',
      text_zh: '栅格布局',
      text_en: 'Grid'
    }, {
      id: 3,
      icon: 'float',
      type: 'float',
      text_zh: '浮动布局',
      text_en: 'Float'
      }, {
        id: 4,
        icon: 'list',
        type: 'list',
        text_zh: '列表',
        text_en: 'List'
      }, {
      id: 5,
      icon: 'indexlist',
      type: 'indexlist',
      text_zh: '索引列表',
      text_en: 'IndexList'
    }, {
      id: 6,
      icon: 'collapse',
      type: 'collapse',
      text_zh: '折叠面板',
      text_en: 'Collapse'
    }, {
      id: 7,
      icon: 'waterflow',
      type: 'waterflow',
      text_zh: '瀑布流',
      text_en: 'WaterFlow'
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
      url: '/pages/layout/'+type+'/'+type
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