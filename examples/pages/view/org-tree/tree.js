// pages/view/tree/tree.js
const avator = '/images/logo.jpg'
const tree = [{
  avator,
  name: 'ceo',
  level: 0,
  id: 'id001',
  members: [{
    avator,
    name: '销售经理',
    level: 1,
    id: 'id0012',
    parentId: 'id001',
    members: [{
      avator,
      name: '销售主任1',
      level: 2,
      id: 'id00121',
      parentId: 'id0012'
    }, {
      avator,
      name: '销售主任2',
      level: 2,
      id: 'id00122',
      parentId: 'id0012',
      members: [{
        avator,
        name: '销售员1',
        level: 3,
        id: 'id001221',
        parentId: 'id00122'
      }, {
        avator,
        name: '销售员2',
        level: 3,
        id: 'id001222',
        parentId: 'id00122'
      }]
    }, {
      avator,
      name: '销售主任3',
      level: 2,
      id: 'id00123',
      parentId: 'id0012'
    }]
  }, {
    avator,
    name: '研发经理',
    level: 1,
    id: 'id0013',
    parentId: 'id001',
    members: [{
      avator,
      name: '研发主任1',
      level: 2,
      id: 'id00131',
      parentId: 'id0013'
    }, {
      avator,
      name: '研发主任2',
      level: 2,
      id: 'id00132',
      parentId: 'id0013',
      members: [{
        avator,
        name: '研发工程师1',
        level: 3,
        id: 'id001321',
        parentId: 'id00132'
      }, {
        avator,
        name: '研发工程师2',
        level: 3,
        id: 'id001322',
        parentId: 'id00132'
      }]
    }, {
      avator,
      name: '研发主任3',
      level: 2,
      id: 'id00133',
      parentId: 'id0013'
    }]
  }, {
    avator,
    name: '测试经理',
    level: 1,
    id: 'id0014',
    parentId: 'id001'
  }, {
    avator,
    name: '人事经理',
    level: 1,
    id: 'id0015',
    parentId: 'id001'
  }]
}]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tree: [],
    initId: 'id001'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tree: tree
    })
  },
  selectChange(e) {
    console.log(e)
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