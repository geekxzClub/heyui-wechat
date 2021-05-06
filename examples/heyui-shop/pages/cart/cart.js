// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {    
    'checkAll': false,
    'totalCount': 0,
    'totalPrice': 0,
    'goodList': [
      {
        'title': '一抹朱砂',
        'id': '1',
        'img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png',
        'desc': '古董18K金珊瑚水晶托戒指',
        'price': 18900,
        'count': 1,
        'checked': false
      },{
        'title': '心有灵犀',
        'id': '2',
        'img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
        'desc': '复古宫廷满钻戒指 钻石5克拉',
        'price': 22800,
        'count': 1,
        'checked': false
      },{
        'title': '花开见佛',
        'id': '3',
        'img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
        'desc': '翡翠A货 黄翡花开见佛挂件',
        'price': 25800,
        'count': 1,
        'checked': false
      },
      
    ],
    goodsList2: [{
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车' 
    })
  },

/*提交订单*/
submitOrder: function () {
  wx.navigateTo({
    url: '../order/order?account=' + this.data.account + '&from=cart'
  });
},
goToDetail: function (e) {
  wx.navigateTo({
    url: '/heyui-shop/pages/detail/detail'
  })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.calculateTotal();
  },
  /**
   * 计算商品总数
   */
  calculateTotal: function () {
    var goodList = this.data.goodList;
    var totalCount = 0;
    var totalPrice = 0;
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i];
      if (good.checked) {
        totalCount += good.count;
        totalPrice += good.count * good.price;
      }
    }
    totalPrice = totalPrice.toFixed(2);
    this.setData({
      'totalCount': totalCount,
      'totalPrice': totalPrice
    })
  },

  /**
   * 用户点击商品减1
   */
  subtracttap: function (e) {
    var index = e.target.dataset.index;
    var goodList = this.data.goodList;
    var count = goodList[index].count;
    if (count <= 1) {
      return;
    } else {
      goodList[index].count--;
      this.setData({
        'goodList': goodList
      });
      this.calculateTotal();
    }
  },

  /**
   * 用户点击商品加1
   */
  addtap: function (e) {
    var index = e.target.dataset.index;
    var goodList = this.data.goodList;
    var count = goodList[index].count;
    goodList[index].count++;
    this.setData({
      'goodList': goodList
    });
    this.calculateTotal();
  },
  /**
   * 用户选择购物车商品
   */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.goodList;
    var values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {
        if (checkboxItems[i].id == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    var checkAll = false;
    if (checkboxItems.length == values.length) {
      checkAll = true;
    }

    this.setData({
      'goodList': checkboxItems,
      'checkAll': checkAll
    });
    this.calculateTotal();
  },

  /**
   * 用户点击全选
   */
  selectalltap: function (e) {
    console.log('用户点击全选，携带value值为：', e.detail.value);
    var value = e.detail.value;
    var checkAll = false;
    if (value && value[0]) {
      checkAll = true;
    }

    var goodList = this.data.goodList;
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i];
      good['checked'] = checkAll;
    }

    this.setData({
      'checkAll': checkAll,
      'goodList': goodList
    });
    this.calculateTotal();
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