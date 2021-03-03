// pages/nav/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menulist: [
      {
        "id": "1",
        "url": "/images/top.png",
        "title": "顶部",
      },
      {
        "id": "2",
        "url": "/images/add.png",
        "title": "添加",
      },
      {
        "id": "3",
        "url": "/images/buy.png",
        "title": "购物车",
      },
    ],
    mainmodel: {
      "url": "/images/home.png",
      "title": "菜单",
    }
  },

  menuItemClick: function (res) {
    // console.log(res);
    //获取点击事件的信息
    let clickInfo = res.detail.iteminfo
    // console.log(clickInfo);
    // 根据不同类型进行判别处理
    //事件的处理 代码
    wx.showToast({
      title: '点击了~ ' + clickInfo.title,
      icon: 'none'
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