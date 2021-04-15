Page({
  data: {
    navigate: [{
      url: "../../index/index",
      type: "switchTab",
      text: "HeyUI首页"
    }],
    navigate2: [{
      url: "../../index/index",
      type: "switchTab",
      text: "返回首页",
      color: "#5677fc"
    }, {
      url: "../../my/my",
      type: "switchTab",
      text: "个人中心",
      color: "#5677fc",
      size: 30
    }],
    navigate3: [{
      url: "../../index/index",
      type: "switchTab",
      text: "返回首页"
    }, {
      url: "../../my/my",
      type: "switchTab",
      text: "个人中心"
    }, {
      url: "../../about/about",
      type: "navigate",
      text: "Hey UI"
    }],
    copyright: " Copyright © 2020-2021 Hey UI."
  },
  onLoad: function (options) {

  },
  detail: function () {
    wx.showToast({
      title: '详情功能尚未完善~',
      icon: "none"
    })
  }
})