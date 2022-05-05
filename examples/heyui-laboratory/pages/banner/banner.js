// pages/view/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    isPlay: true,
    current: 0,//banner当前的index
    swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
      }, {
        id: 1,
          type: 'image',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner2.jpg',
      }, {
        id: 2,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner3.jpg'
      }, {
        id: 3,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner4.jpg'
      }, {
        id: 4,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner5.jpg'
      }, {
        id: 5,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner6.jpg'
      }, {
        id: 6,
        type: 'image',
          url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
      }],
    swiperList2: [{
      id: 0,
      type: 'video',
      url: 'https://oss.geekxz.com/hey-ui-oss/video/test.mp4',
      img: 'https://oss.geekxz.com/hey-ui-oss/banner/banner5.jpg'      
    }, {
      id: 1,
        type: 'image',
        url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
    }, {
      id: 2,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner3.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner4.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner5.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner6.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/banner/banner1.jpg'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })   
  },
  bannerChage(e) {
    var that = this;
    that.setData({
      current: e.detail.current
    })
    if (e.detail.current == 0) {
      that.videoContext.play()
    } else {
      that.videoContext.pause()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext("bannerVideo");
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