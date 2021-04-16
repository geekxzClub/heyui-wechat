//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    tabbar: [{
      icon: "home@selected",
      text: "首页",
      size: 21
    }, {
      icon: "category@selected",
      text: "分类",
      size: 24
    }, {
      icon: "cart@selected",
      text: "购物车",
      size: 22
    }, {
      icon: "my@selected",
      text: "我的",
      size: 24
    }],

    navbarInitTop: 0, //导航栏初始化距顶部的距离
    isFixedTop: false, //是否固定顶部

    cardCur: 0,
    isPlay: true,
    current: 0, //banner当前的index
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/banner/sy1-1.png'
    }, {
      id: 1,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/banner/sy1-2.png',
    }, {
      id: 2,
      type: 'image',
      url: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/banner/sy1-3.png'
    }],


    goodsList: [{
      id: 1,
      title: '一抹朱砂 古董18K金珊瑚水晶托戒指',
      price: 18900,
      store: 2,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png'
    }, {
      id: 2,
      title: '心有灵犀 复古宫廷满钻戒指 钻石5克拉',
      price: 22800,
      store: 3,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
    }, {
      id: 3,
      title: '花开见佛 翡翠A货 黄翡花开见佛挂件',
      price: 25800,
      store: 99,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/14.png'
    }, {
      id: 3,
      title: '火树银花 古董14K黄金青金石/蓝松石/钻石套装',
      price: 39800,
      store: 8,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png'
    }, {
      id: 4,
      title: '假日花园 古董18K黄金cameo珍珠项链',
      price: 19800,
      store: 10,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/4.png'
    }, {
      id: 3,
      title: '财源广进 翡翠A货 老坑蓝水财神挂件',
      price: 12800,
      store: 99,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/13.png'
    }, {
      id: 1,
      title: '玫瑰余香 意大利18K双色金拉丝手镯',
      price: 36800,
      store: 8,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/5.png'
    }, {
      id: 2,
      title: '伊甸园 古董18K黄金珐琅彩蛇形手镯',
      price: 78000,
      store: 20,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/6.png',
    }, {
      id: 3,
      title: '龙腾万里 翡翠A货 冰绿飘花悟道挂件',
      price: 19800,
      store: 99,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/11.png'
    }, {
      id: 3,
      title: '依马可待 古董18K黄金cameo吊坠/胸针',
      price: 7800,
      store: 99,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/7.png'
    }, {
      id: 4,
      title: '花团锦簇 古董18K金无烧蓝宝石满钻胸针',
      price: 68000,
      store: 99,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/8.png'
    }, {
      id: 4,
      title: '江南烟雨 翡翠A货 冰蓝飘花山水牌挂件',
      price: 68000,
      store: 99,
      img: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/12.png'
    }],
  },

  tabbarSwitch: function(e) {
    let index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      current: index
    })
    if (index != 0) {
      if (index == 1) {
        wx.navigateTo({
          url: '/heyui-shop/pages/category/category'
        })
      } else if (index == 2) {
        wx.navigateTo({
          url: '/heyui-shop/pages/cart/cart'
        })
      } else {
        wx.navigateTo({
          url: '/heyui-shop/pages/about/about'
        })
      }
    }
  },

    //滚动条监听
    scroll: function (e) {
      this.setData({ scrollTop: e.detail.scrollTop })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToDetail: function (e) {
    wx.navigateTo({
      url: '/heyui-shop/pages/detail/detail'
    })
  },
  
  goToCategory: function (e) {
    wx.navigateTo({
      url: '/heyui-shop/pages/category/category',
    })
    // console.log(e.currentTarget.dataset.tid)
    // 设置tid缓存
    wx.setStorageSync('tid', e.currentTarget.dataset.tid)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  inputFocus(e){
    wx.navigateTo({
      url: '/heyui-shop/pages/search/search?k='
    });
  },
  goToSeries:function(){
    wx.navigateTo({
      url: '/heyui-shop/pages/series/series'
    });
  },
  goToMore: function(e){
    var sid = e.currentTarget.dataset.sid
    var sname = e.currentTarget.dataset.sname
    wx.navigateTo({
      url: '/heyui-shop/pages/series/more/more?sid=' + sid + '&sname=' + sname
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    if (that.data.navbarInitTop == 0) {
      //获取节点距离顶部的距离
      wx.createSelectorQuery().select('#search-bar').boundingClientRect(function(rect) {
        if (rect && rect.top > 0) {
          var navbarInitTop = parseInt(rect.top);
          that.setData({
            navbarInitTop: navbarInitTop
          });
        }
      }).exec();
    }
  },
  /**
   * 监听页面滑动事件
   */
  onPageScroll: function(e) {
    var that = this;
    var scrollTop = parseInt(e.scrollTop); //滚动条距离顶部高度
    //判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
    var isSatisfy = scrollTop >= that.data.navbarInitTop ? true : false;
    //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    if (that.data.isFixedTop === isSatisfy) {
      return false;
    }
    that.setData({
      isFixedTop: isSatisfy
    });
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