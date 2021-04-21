// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'input',
      type: 'input',
      text_zh: '单行输入框',
      text_en: 'Input'
    }, {
      id: 2,
      icon: 'textarea',
      type: 'textarea',
      text_zh: '多行输入框',
      text_en: 'Textarea'
    }, {
      id: 3,
      icon: 'radio',
      type: 'radio',
      text_zh: '单选框',
      text_en: 'Radio'
    }, {
      id: 4,
      icon: 'checkbox',
      type: 'checkbox',
      text_zh: '多选框',
      text_en: 'Checkbox'
    }, {
      id: 5,
      icon: 'switch',
      type: 'switch',
      text_zh: '开关',
      text_en: 'Switch'
    }, {
      id: 6,
      icon: 'picker',
      type: 'picker',
      text_zh: '选择框',
      text_en: 'Picker'
    }, {
      id: 7,
      icon: 'imagepicker',
      type: 'imagepicker',
      text_zh: '图片选择器',
      text_en: 'Imagepicker'
    }, {
      id: 8,
      icon: 'rate',
      type: 'rate',
      text_zh: '评分',
      text_en: 'Rate'
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
      url: '/pages/form/'+type+'/'+type
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