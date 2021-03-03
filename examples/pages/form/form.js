// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'cardboardfill',
      type: 'input',
      text: 'Input 单行输入框'
    }, {
      id: 2,
      icon: 'cardboardfill',
      type: 'textarea',
      text: 'Textarea 多行输入框'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'radio',
      text: 'Radio 单选'
    }, {
      id: 4,
      icon: 'cardboardfill',
      type: 'checkbox',
      text: 'Checkbox 多选'
    }, {
      id: 5,
      icon: 'cardboardfill',
      type: 'switch',
      text: 'Switch 开关'
    }, {
      id: 6,
      icon: 'cardboardfill',
      type: 'select',
      text: 'Select 选择框'
    }, {
      id: 7,
      icon: 'cardboardfill',
      type: 'imagepicker',
        text: 'Imagepicker 图片选择器'
    }, {
      id: 8,
      icon: 'cardboardfill',
      type: 'rate',
      text: 'Rate 评分'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'input') {
      wx.navigateTo({
        url: '/pages/form/input/input'
      })
    }
    if (type == 'textarea') {
      wx.navigateTo({
        url: '/pages/form/textarea/textarea'
      })
    }
    if (type == 'radio') {
      wx.navigateTo({
        url: '/pages/form/radio/radio'
      })
    }
    if (type == 'checkbox') {
      wx.navigateTo({
        url: '/pages/form/checkbox/checkbox'
      })
    }
    if (type == 'switch') {
      wx.navigateTo({
        url: '/pages/form/switch/switch'
      })
    }
    if (type == 'select') {
      wx.navigateTo({
        url: '/pages/form/select/select'
      })
    }
    if (type == 'image') {
      wx.navigateTo({
        url: '/pages/form/image/image'
      })
    }
    if (type == 'rate') {
      wx.navigateTo({
        url: '/pages/form/rate/rate'
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