// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarInitTop: 0, //导航栏初始化距顶部的距离
    isFixedTop: false, //是否固定顶部
    TabCur: 0,
    scrollLeft: 0,
    navTab: ['全部订单', '待付款', '待收货', '已完成'],
    'orderArr': [
      {
        'id': '1',
        'order_no': '155545464',
        'snap_name': '一抹朱砂',
        'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png',
        'desc': '古董18K金珊瑚水晶托戒指',
        'total_price': 18900,
        'total_count': 1,
        'status': 1
      },{
        'id': '2',
        'order_no': '155545464',
        'snap_name': '心有灵犀',
        'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
        'desc': '复古宫廷满钻戒指 钻石5克拉',
        'total_price': 22800,
        'total_count': 1,
        'status': 3
      },{
        'id': '3',
        'order_no': '155545464',
        'snap_name': '花开见佛',
        'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
        'desc': '翡翠A货 黄翡花开见佛挂件',
        'total_price': 25800,
        'total_count': 1,
        'status': 2
      },{
        'id': '4',
        'order_no': '155545464',
        'snap_name': '花开见佛',
        'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
        'desc': '翡翠A货 黄翡花开见佛挂件',
        'total_price': 25800,
        'total_count': 1,
        'status': 2
      },
      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.tab)
    this.setData({
      TabCur: options.tab-1,
    })
    if(this.data.TabCur==0){
      this.setData({
        orderArr: [
          {
            'id': '1',
            'order_no': '155545464',
            'snap_name': '一抹朱砂',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png',
            'desc': '古董18K金珊瑚水晶托戒指',
            'total_price': 18900,
            'total_count': 1,
            'status': 1
          },{
            'id': '2',
            'order_no': '155545464',
            'snap_name': '心有灵犀',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
            'desc': '复古宫廷满钻戒指 钻石5克拉',
            'total_price': 22800,
            'total_count': 1,
            'status': 3
          },{
            'id': '3',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 2
          },{
            'id': '4',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 2
          },
          
        ],
      })
    }
    if(this.data.TabCur==1){
      this.setData({
        orderArr: [
          {
            'id': '1',
            'order_no': '155545464',
            'snap_name': '一抹朱砂',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png',
            'desc': '古董18K金珊瑚水晶托戒指',
            'total_price': 18900,
            'total_count': 1,
            'status': 1
          } 
        ],
      })
    }
    if(this.data.TabCur==2){
      this.setData({
        orderArr: [
          {
            'id': '2',
            'order_no': '155545464',
            'snap_name': '心有灵犀',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
            'desc': '复古宫廷满钻戒指 钻石5克拉',
            'total_price': 22800,
            'total_count': 1,
            'status': 2
          }
        ],
      })
    }
    if(this.data.TabCur==3){
      this.setData({
        orderArr: [
          {
            'id': '3',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 3
          },{
            'id': '4',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 3
          }
        ],
      })
    }
  },
  selectTab(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    if(e.currentTarget.dataset.id==0){
      this.setData({
        orderArr: [
          {
            'id': '1',
            'order_no': '155545464',
            'snap_name': '一抹朱砂',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png',
            'desc': '古董18K金珊瑚水晶托戒指',
            'total_price': 18900,
            'total_count': 1,
            'status': 1
          },{
            'id': '2',
            'order_no': '155545464',
            'snap_name': '心有灵犀',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
            'desc': '复古宫廷满钻戒指 钻石5克拉',
            'total_price': 22800,
            'total_count': 1,
            'status': 3
          },{
            'id': '3',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 2
          },{
            'id': '4',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 2
          },
          
        ],
      })
    }
    if(e.currentTarget.dataset.id==1){
      this.setData({
        orderArr: [
          {
            'id': '1',
            'order_no': '155545464',
            'snap_name': '一抹朱砂',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png',
            'desc': '古董18K金珊瑚水晶托戒指',
            'total_price': 18900,
            'total_count': 1,
            'status': 1
          } 
        ],
      })
    }
    if(e.currentTarget.dataset.id==2){
      this.setData({
        orderArr: [
          {
            'id': '2',
            'order_no': '155545464',
            'snap_name': '心有灵犀',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
            'desc': '复古宫廷满钻戒指 钻石5克拉',
            'total_price': 22800,
            'total_count': 1,
            'status': 2
          }
        ],
      })
    }
    if(e.currentTarget.dataset.id==3){
      this.setData({
        orderArr: [
          {
            'id': '3',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 3
          },{
            'id': '4',
            'order_no': '155545464',
            'snap_name': '花开见佛',
            'snap_img': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
            'desc': '翡翠A货 黄翡花开见佛挂件',
            'total_price': 25800,
            'total_count': 1,
            'status': 3
          }
        ],
      })
    }
    
    // wx.showToast({
    //   title: this.data.navTab[ e.currentTarget.dataset.id],
    //   icon: 'none',
    //   duration: 1000
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /*显示订单的具体信息*/
  showOrderDetailInfo: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/heyui-shop/pages/order/order?from=order&id=' + id
    });
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