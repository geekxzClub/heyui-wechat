// pages/plugin/plugin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 'h-fun',
      icon: 'h-fun',
      name: '函数',
      open: false,
      pages: [{
        name: "数组函数",
        page: "h-array"
      },{
        name: "字符串",
        page: "h-string"
      },{
        name: "判断",
        page: "h-is"
      }]
    }, {
      id: 'shop',
      icon: "h-shop",
      name: '商城源码',
      open: false,
      pages: [{
        name: "小商城",
        page: "heyui-shop"
      }, {
        name: "B2C商城",
        page: "heyui-mall"
      }]
    },
    {
      id: 'appointment',
      icon: "h-appointment",
      name: '预约源码',
      open: false,
      pages: [{
        name: "驾校练车",
        page: "car"
      }, {
      name: "实验室",
      page: "laboratory"
      }, {
        name: "课程预约",
        page: "course"
      }, {
        name: "运动场地",
        page: "course"
      }, {
        name: "美容服务",
        page: "course"
      }, {
        name: "培训班",
        page: "course"
      }, {
        name: "酒店预约",
        page: "hotel"
      }]
    },
    {
      id: 'blog',
      icon: "h-blog",
      name: '个人博客',
      open: false,
      pages: [{
        name: "简单主题",
        page: "simple"
      },{
        name: "全屏主题",
        page: "full"
      }]
    },
    {
      id: 'company',
      icon: "h-company",
      name: '公司官网',
      open: false,
      pages: [{
        name: "简单主题",
        page: "qrcode"
      }]
    },
    {
      id: 'questionnaire',
      icon: "h-questionnaire",
      name: '问卷调查',
      open: false,
      pages: [{
        name: "产品使用满意度",
        page: "questionnaire"
      }]
    },
    {
      id: 'vote',
      icon: "h-vote",
      name: '投票模板',
      open: false,
      pages: [{
        name: "少儿才艺大赛",
        page: "children"
      },{
        name: "最佳摄影作品",
        page: "photography"
      },{
        name: "优秀员工评选",
        page: "staff"
      }]
    },
    {
      id: 'prize',
      icon: "h-gift",
      name: '抽奖模板',
      open: false,
      pages: [{
        name: "开心大转盘",
        page: "turntable"
      },{
        name: "幸运九宫格",
        page: "nine-grid"
      },{
        name: "欢乐扭蛋机",
        page: "staff"
      },{
        name: "开心刮刮乐",
        page: "staff"
      },{
        name: "手机摇一摇",
        page: "staff"
      },{
        name: "欢乐砸金蛋",
        page: "staff"
      },{
        name: "好运上上签",
        page: "staff"
      },{
        name: "翻滚吧老虎机",
        page: "staff"
      }]
    },
    {
      id: 'active',
      icon: "h-prize",
      name: '开奖模板',
      open: false,
      pages: [{
        name: "活动开奖",
        page: "active"
      }]
    },
    {
      id: 'other',
      icon: "other",
      name: '其他',
      open: false,
      pages: [{
        name: "拼图游戏",
        page: "swipe-action"
      }]
    }
    ],
    
    navigate: [{
      url: "/pages/index/index",
      type: "switchTab",
      text: "返回首页"
    }, {
      url: "/pages/about/index",
      type: "navigate",
      text: "Hey UI"
    }],
    copyright: " Copyright © 2021-2050 Hey UI.",

    tplList: [{
      id: 1,
      icon: 'h-shop',
      type: 'heyui-shop',
      text_zh: '电商购物',
      text_en: 'Hey-Shop'
    }, {
        id: 2,
        icon: 'h-gift',
        type: 'toast',
        text_zh: '抽奖',
        text_en: 'Hey-Prize'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'message',
      text_zh: '预约会客',
      text_en: 'Hey-Meeting'
    }, {
      id: 4,
      icon: 'cardboardfill',
      type: 'dialog',
      text_zh: '课程表',
      text_en: 'Hey-Timetable'
    }, {
      id: 5,
      icon: 'cardboardfill',
      type: 'dialog',
      text_zh: '个人博客',
      text_en: 'Hey-Blog'
    }, {
      id: 6,
      icon: 'cardboardfill',
      type: 'dialog',
      text_zh: '在线聊天',
      text_en: 'Hey-Chat'
    }, {
      id: 7,
      icon: 'cardboardfill',
      type: 'dialog',
      text_zh: '内容管理系统',
      text_en: 'Hey-Cms'
    }, {
      id: 8,
      icon: 'cardboardfill',
      type: 'dialog',
      text_zh: '客户管理系统',
      text_en: 'Hey-Crm'
    }, {
      id: 8,
      icon: 'cardboardfill',
      type: 'dialog',
      text_zh: '问卷调查',
      text_en: 'Hey-Thorough'
    }, {
      id: 8,
      icon: 'cardboardfill',
      type: 'dialog',
      text_zh: '企业官网',
      text_en: 'Hey-Leading'
    }],

    funList: [{
      id: 1,
      icon: 'cardboardfill',
      type: 'actionsheet',
      text_zh: '数组',
      text_en: 'H-Array'
    }, {
        id: 2,
        icon: 'cardboardfill',
        type: 'toast',
        text_zh: '字符串',
        text_en: 'H-String'
    }, {
      id: 3,
      icon: 'cardboardfill',
      type: 'message',
      text_zh: '判断',
      text_en: 'H-Is'
    }]
  },


  goToItem: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'heyui-shop') {
      // wx.navigateTo({
      //   url: '/heyui-shop/pages/index/index'
      // })
      this.dialog()
    }else{
      this.dialog()
    }
  },
  dialog(e) {
    wx.showModal({
      title: '亲爱的',
      content: '会员功能，暂未开放！',
      cancelText: '等待',
      confirmText: '再会',
      success: res => {
        if (res.confirm) {
         
        }
      }
    })
  },

  kindToggle: function(e) {
    var id = e.currentTarget.id,
    list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
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