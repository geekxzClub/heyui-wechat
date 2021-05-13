// pages/other/slideverify/slideverify.js
var coord;  //声明 全局变量
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    area_width: 90,   //可滑动区域的宽，单位是百分比，设置好后自动居中
    box_width: 100,   //滑块的宽,单位是 rpx
    maxNum: 0, 
    icon: false,
    text: true,

    isFlag:false
  },
  drag(e) {
    var that = this;
    coord = e.detail.x;  //根据bindchange 事件获取detail的x轴 
    if(that.data.box_width){
      that.setData({
        text: false
      })
    }
    
  },
  dragOver(e) {     //根据触摸 手指触摸动作结束    判断 当前的x轴 是否大于预设值的值 
    var that = this;
    if (coord >= that.data.maxNum) {
      that.setData({
        icon: true,
      })
      //验证成功之后的代码
    } else {      // 如果不大于 则设置 x周的距离为0
      that.setData({
        x: 0,
      })
    }
  },

  verify(){
    console.log("验证通过");
    this.setData({
        isFlag:true
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
	    wx.getSystemInfo({  //获取系统信息 设置预设值
	      success: function (res) {
	        // console.log(res.windowWidth);
	        var n = Math.floor(res.windowWidth * that.data.area_width / 100 - that.data.box_width / 2)
	        that.setData({
	          maxNum: n,
          })
	      }
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