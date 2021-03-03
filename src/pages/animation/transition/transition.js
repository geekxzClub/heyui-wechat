// pages/animation/transition/transition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: 'fade',
      color: 'red'
    },
    {
      name: 'scale-up',
      color: 'orange'
    },
    {
      name: 'scale-down',
      color: 'olive'
    },
    {
      name: 'slide-top',
      color: 'green'
    }, {
      name: 'slide-bottom',
      color: 'cyan'
    },
    {
      name: 'slide-left',
      color: 'blue'
    },
    {
      name: 'slide-right',
      color: 'purple'
    },
    {
      name: 'shake',
      color: 'mauve'
    }
    ],
    toggleDelay: false
  },
  toggle(e) {
    console.log(e);
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function () {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  toggleDelay() {
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function () {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
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