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
     text_zh: '头像',
     text_en: 'Avatar'
    }, {
      id: 2,
      icon: 'cardboardfill',
      type: 'tag',
     text_zh: '标签',
     text_en: 'Tag'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'progress',
     text_zh: '进度条',
     text_en: 'Progress'
    }, {
      id: 4,
      icon: 'cardboardfill',
      type: 'loading',
     text_zh: '加载',
     text_en: 'Loading'
    }, {
      id: 5,
      icon: 'cardboardfill',
      type: 'swiper',
     text_zh: '轮播图',
     text_en: 'Swiper'
    }, {
      id: 6,
      icon: 'cardboardfill',
      type: 'titlebar',
     text_zh: '标题栏',
     text_en: 'TitleBar'
    }, {
      id: 7,
      icon: 'cardboardfill',
      type: 'searchbar',
     text_zh: '搜索栏',
     text_en: 'SearchBar'
    }, {
      id: 8,
      icon: 'cardboardfill',
      type: 'addtips',
     text_zh: '添加我的小程序',
     text_en: 'AddTips'
    }, {
      id: 9,
      icon: 'cardboardfill',
      type: 'card',
     text_zh: '卡片',
     text_en: 'Card'
    }, {
      id: 10,
      icon: 'cardboardfill',
      type: 'popup',
     text_zh: '弹出层',
     text_en: 'Popup'
    }, {
      id: 11,
      icon: 'cardboardfill',
      type: 'notic',
     text_zh: '通知公告栏',
     text_en: 'Notic'
    }, {
      id: 12,
      icon: 'cardboardfill',
      type: 'barrage',
     text_zh: '弹幕',
     text_en: 'Barrage'
    }, {
      id: 13,
      icon: 'cardboardfill',
      type: 'table2',
     text_zh: '表格',
     text_en: 'Table'
    }, {
      id: 14,
      icon: 'cardboardfill',
      type: 'slideview',
     text_zh: '滑动菜单',
     text_en: 'SlideView'
    }, {
      id: 15,
      icon: 'cardboardfill',
      type: 'divider',
     text_zh: '分割线',
     text_en: 'Divider'
      }, {
        id: 16,
        icon: 'cardboardfill',
        type: 'keyboard',
       text_zh: '车牌键盘',
       text_en: 'KeyBoard'
      }, {
        id: 17,
        icon: 'cardboardfill',
        type: 'verifycode',
       text_zh: '验证码输入',
       text_en: 'VerifyCode'
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