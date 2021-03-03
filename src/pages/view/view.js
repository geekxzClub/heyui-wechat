// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentList: [{
      id: 1,
      icon: 'cardboardfill',
      type: 'avatar',
      text: 'Avatar 头像'
    }, {
      id: 2,
      icon: 'cardboardfill',
      type: 'tag',
      text: 'Tag 标签'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'progress',
      text: 'Progress 进度条'
    }, {
      id: 4,
      icon: 'cardboardfill',
      type: 'loading',
      text: 'Loading 加载'
    }, {
      id: 5,
      icon: 'cardboardfill',
      type: 'swiper',
      text: 'Swiper 轮播图'
    }, {
      id: 6,
      icon: 'cardboardfill',
      type: 'titlebar',
      text: 'TitleBar 标题栏'
    }, {
      id: 7,
      icon: 'cardboardfill',
      type: 'searchbar',
      text: 'SearchBar 搜索栏'
    }, {
      id: 8,
      icon: 'cardboardfill',
      type: 'addtips',
      text: 'AddTips 添加我的小程序'
    }, {
      id: 9,
      icon: 'cardboardfill',
      type: 'card',
      text: 'Card 卡片'
    }, {
      id: 10,
      icon: 'cardboardfill',
      type: 'popup',
      text: 'Popup 弹出层'
    }, {
      id: 11,
      icon: 'cardboardfill',
      type: 'notic',
      text: 'Notic 通知公告栏'
    }, {
      id: 12,
      icon: 'cardboardfill',
      type: 'barrage',
      text: 'Barrage 弹幕'
    }, {
      id: 13,
      icon: 'cardboardfill',
      type: 'table2',
      text: 'Table 表格'
    }, {
      id: 14,
      icon: 'cardboardfill',
      type: 'slideview',
      text: 'SlideView 滑动菜单'
    }, {
      id: 15,
      icon: 'cardboardfill',
      type: 'divider',
      text: 'Divider 分割线'
      }, {
        id: 16,
        icon: 'cardboardfill',
        type: 'keyboard',
        text: 'KeyBoard 车牌键盘'
      }, {
        id: 17,
        icon: 'cardboardfill',
        type: 'verifycode',
        text: 'VerifyCode 验证码输入'
      }],
    val: 50,
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
  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'avatar') {
      wx.navigateTo({
        url: '/pages/view/avatar/avatar'
      })
    }
    if (type == 'tag') {
      wx.navigateTo({
        url: '/pages/view/tag/tag'
      })
    }
    if (type == 'progress') {
      wx.navigateTo({
        url: '/pages/view/progress/progress'
      })
    }
    if (type == 'swiper') {
      wx.navigateTo({
        url: '/pages/view/swiper/swiper'
      })
    }
    if (type == 'loading') {
      wx.navigateTo({
        url: '/pages/view/loading/loading'
      })
    }
    if (type == 'titlebar') {
      wx.navigateTo({
        url: '/pages/view/title/title'
      })
    }
    if (type == 'searchbar') {
      wx.navigateTo({
        url: '/pages/view/search/search'
      })
    }
    if (type == 'addtips') {
      wx.navigateTo({
        url: '/pages/view/addtips/addtips'
      })
    }
    if (type == 'card') {
      wx.navigateTo({
        url: '/pages/view/card/card'
      })
    }
    if (type == 'popup') {
      wx.navigateTo({
        url: '/pages/view/popup/popup'
      })
    }
    if (type == 'notic') {
      wx.navigateTo({
        url: '/pages/view/notic/notic'
      })
    }
    if (type == 'barrage') {
      wx.navigateTo({
        url: '/pages/view/barrage/barrage'
      })
    }
    if (type == 'table') {
      wx.navigateTo({
        url: '/pages/view/table/table'
      })
    }
    if (type == 'table2') {
      wx.navigateTo({
        url: '/pages/view/table/table2'
      })
    }
    if (type == 'slideview') {
      wx.navigateTo({
        url: '/pages/view/slideview/slideview'
      })
    }
    if (type == 'divider') {
      wx.navigateTo({
        url: '/pages/view/divider/divider'
      })
    } 
    if (type == 'keyboard') {
      wx.navigateTo({
        url: '/pages/view/keyboard/keyboard'
      })
    }
    if (type == 'verifycode') {
      wx.navigateTo({
        url: '/pages/view/verifycode/verifycode'
      })
    }
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