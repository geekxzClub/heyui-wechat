// pages/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'cardboardfill',
      type: 'flex',
      text: 'Flex 弹性布局'
    }, {
      id: 2,
      icon: 'cardboardfill',
      type: 'grid',
      text: 'Grid 栅格布局'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'float',
      text: 'Float 浮动布局'
      }, {
        id: 4,
        icon: 'cardboardfill',
        type: 'list',
        text: 'List 列表'
      }, {
      id: 5,
      icon: 'cardboardfill',
      type: 'indexlist',
      text: 'IndexList 索引列表'
    }, {
      id: 6,
      icon: 'cardboardfill',
      type: 'collapse',
      text: 'Collapse 折叠面板'
    }, {
      id: 7,
      icon: 'cardboardfill',
      type: 'waterflow',
      text: 'WaterFlow 瀑布流'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type =='flex'){
      wx.navigateTo({
        url: '/pages/layout/flex/flex'
      })
    }
    if (type == 'grid') {
      wx.navigateTo({
        url: '/pages/layout/grid/grid'
      })
    }
    if (type == 'float') {
      wx.navigateTo({
        url: '/pages/layout/float/float'
      })
    }
    if (type == 'list') {
      wx.navigateTo({
        url: '/pages/layout/list/list'
      })
    }
    if (type == 'indexlist') {
      wx.navigateTo({
        url: '/pages/layout/indexlist/indexlist'
      })
    }
    if (type == 'collapse') {
      wx.navigateTo({
        url: '/pages/layout/collapse/collapse'
      })
    }
    if (type == 'waterflow') {
      wx.navigateTo({
        url: '/pages/layout/waterflow/waterflow'
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