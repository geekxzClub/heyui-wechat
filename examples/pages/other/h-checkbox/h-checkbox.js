// pages/other/h-checkbox/h-checkbox.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    applyList:[
      {item_id: "10", item_name: "公司",isSelect: false},
      {item_id: "11", item_name: "职务",isSelect: false},
      {item_id: "12", item_name: "行业",isSelect: false},
      {item_id: "13", item_name: "住址",isSelect: false}
    ],
    emp: []
  },
  
  selectApply:function(e){
    var index = e.currentTarget.dataset.index;
    var item = this.data.applyList[index];
    item.isSelect = !item.isSelect;
    console.log(item.isSelect)
    if(item.isSelect == true){       
      this.data.emp.push(item.item_name)    
    }else if(item.isSelect == false){
      this.removeByValue(this.data.emp, item.item_name);
    }
    this.setData({
      applyList: this.data.applyList,
    });
    if(this.data.emp.length>0){
      wx.showToast({
        title: this.data.emp.join(','),
        icon: 'none',
        duration: 1500
      })      
    }
  },

  // 删除数组某个元素
  removeByValue(arr, val) {
   for(var i = 0; i < arr.length; i++) {
    if(arr[i] == val) {
     arr.splice(i, 1);
     break;
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