// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    isPlay: true,
    current: 0, //banner当前的index
    swiperList: [{
      id: 0,
      type: 'image',
      url: '/images/q1.png'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '关于我们' 
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  myCancel: function(e){
    this.setData({
      modalName: null
    })
    wx.showToast({
      title: "点击了取消~",
      icon: 'none',
      duration: 1000
    })
  },
  myConfirm:function(e){
    this.setData({
      modalName: null
    })
    wx.showToast({
      title: "点击了确认~",
      icon: 'none',
      duration: 1000
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  goToOrder: function (e) {
    wx.navigateTo({
      url: '/heyui-shop/pages/about/order/order?tab=' + e.currentTarget.dataset.tab
    })
  },
  goToAfterSale: function (e) {
    wx.navigateTo({
      url: '/heyui-shop/pages/about/agreement/agreement?tab=' + e.currentTarget.dataset.tid
    })
  },
  
  /*修改或者添加地址信息*/
  editAddress: function () {
    var that = this;
    wx.chooseAddress({
      success: function (res) {
        var addressInfo = {
          name: res.userName,
          mobile: res.telNumber,
          // totalDetail: address.setAddressInfo(res)
        };
        that._bindAddressInfo(addressInfo);

        //保存地址 更新到数据库
        // address.submitAddress(res, (flag) => {
        //   if (!flag) {
        //     that.showTips('操作提示', '地址信息更新失败！');
        //   }
        // });
      }
    })
  },
  /*绑定地址信息*/
  _bindAddressInfo: function (addressInfo) {
    console.log(addressInfo)
    this.setData({
      addressInfo: addressInfo
    });
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