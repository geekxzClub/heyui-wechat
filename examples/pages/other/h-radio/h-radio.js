// pages/other/h-radio/h-radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx: '',
    applyList:[
        {item_id: "10", item_name: "公司"},
        {item_id: "11", item_name: "职务"},
        {item_id: "12", item_name: "行业"},
        {item_id: "13", item_name: "住址"}
      ]
    },
    selectApply:function(e){
      let id = e.target.dataset.id
       this.setData({
         idx: id
       })
       for (const elem of this.data.applyList) {
        if(elem['item_id'] == id){
          wx.showToast({
            title: elem['item_name'],
            icon: 'none',
            duration: 1500
          })
        }
       }
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