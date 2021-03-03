// pages/view/table/table.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    config: {
      content: [],
      titles: ['id', '名字', '年龄', '学校', '年薪'],
      props: ['id', 'name', 'age', 'school', 'price'],
      columnWidths: ['14%', '20%', '20%', '32%', '14%'],
      border: true,
      stripe: true,
      // headbgcolor : '#dddddd'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let content = [
      {
        id: 1,
        name: '阿狗',
        age: 23,
        school: '暨南大学计算机',
        price: '100k'
      },
      {
        id: 2,
        name: '阿花',
        age: 22,
        school: '中山大学',
        price: '90k'
      },
      {
        id: 3,
        name: '阿强',
        age: 22,
        school: '华南农业大学',
        price: '90k'
      },
      {
        id: 4,
        name: '阿林',
        age: 24,
        school: '上海交通大学',
        price: '90k'
      }
    ]
    let that = this
    // 此处模拟网络请求
    setTimeout(function () {
      that.setData({
        'config.content': content
      })
    }, 1000)
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