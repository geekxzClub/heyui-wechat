// pages/form/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    picker: ['阿狗-大佬', '阿强-大佬', '阿花-大佬'],


    multiArray: [
      ['阿狗', '阿强', '阿花'],
      ['前端', '全栈', '后端', 'Vue', 'PHP'],
      ['大佬', '菜鸡']
    ],
    objectMultiArray: [
      [{
        id: 0,
        name: '阿狗'
      },
      {
        id: 1,
        name: '阿强'
      },
      {
        id: 1,
        name: '阿花'
      }
      ],
      [{
        id: 0,
        name: '前端'
      },
      {
        id: 1,
        name: '全栈'
      },
      {
        id: 2,
        name: '后端'
      },
      {
        id: 3,
        name: 'Vue'
      },
      {
        id: 3,
        name: 'PHP'
      }
      ],
      [{
        id: 0,
        name: '大佬'
      },
      {
        id: 1,
        name: '菜鸡'
      }
      ]
    ],
    multiIndex: [0, 0, 0],

    time: '12:01',
    date: '2018-12-25',
    region: ['广东省', '广州市', '海珠区'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },

  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['前端', '全栈', '后端', 'Vue', 'PHP'];
            data.multiArray[2] = ['大佬', '菜鸡'];
            break;
          case 1:
            data.multiArray[1] = ['前端', '全栈', '后端'];
            data.multiArray[2] = ['大佬'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['大佬', '菜鸡'];
                break;
              case 1:
                data.multiArray[2] = ['大佬', '菜鸡'];
                break;
              case 2:
                data.multiArray[2] = ['大佬', '菜鸡'];
                break;
              case 3:
                data.multiArray[2] = ['大佬', '菜鸡'];
                break;
              case 4:
                data.multiArray[2] = ['大佬', '菜鸡'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['大佬'];
                break;
              case 1:
                data.multiArray[2] = ['大佬', '菜鸡'];
                break;
              case 2:
                data.multiArray[2] = ['菜鸡'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },

  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
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