// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_list: [{
      id: 1,
      name: '珠宝',
    }, {
        id: 2,
        name: '钟表',
      }, {
        id: 3,
        name: '家居',
      }, {
        id: 4,
        name: '摆件',
      }],
    productList: [{
      id: 1,
      title: '一抹朱砂',
      dec: '古董18K金珊瑚水晶托戒指',
      price: 18900,
      pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png'
    }, {
        id: 2,
        title: '心有灵犀',
        dec: '复古宫廷满钻戒指 钻石5克拉',
        price: 22800,
        pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
      }, {
        id: 3,
        title: '火树银花',
        dec: '古董14K黄金青金石/蓝松石/钻石套装',
        price: 39800,
        pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png'
      }, {
        id: 4,
        title: '假日花园',
        dec: '古董18K黄金cameo珍珠项链',
        price: 19800,
        pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/4.png'
      }, {
        id: 5,
        title: '玫瑰余香',
        dec: '意大利18K双色金拉丝手镯',
        price: 36800,
        pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/5.png'
      }, {
        id: 6,
        title: '伊甸园',
        dec: '古董18K黄金珐琅彩蛇形手镯',
        price: 78000,
        pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/6.png'
      }],
    curNav: 1,
    curIndex: 1,
    winHeight: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  goToDetail: function (e) {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  //事件处理函数  
  switchRightTab: function (e) {
    var that = this;
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
    if (index == 0) {
      that.setData({
        productList: [{
          id: 1,
          title: '一抹朱砂',
          dec: '古董18K金珊瑚水晶托戒指',
          price: 18900,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png'
        }, {
            id: 2,
            title: '心有灵犀',
            dec: '复古宫廷满钻戒指 钻石5克拉',
            price: 22800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
          }, {
            id: 3,
            title: '火树银花',
            dec: '古董14K黄金青金石/蓝松石/钻石套装',
            price: 39800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png'
          }, {
            id: 4,
            title: '假日花园',
            dec: '古董18K黄金cameo珍珠项链',
            price: 19800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/4.png'
          }, {
            id: 5,
            title: '玫瑰余香',
            dec: '意大利18K双色金拉丝手镯',
            price: 36800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/5.png'
          }, {
            id: 6,
            title: '伊甸园',
            dec: '古董18K黄金珐琅彩蛇形手镯',
            price: 78000,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/6.png'
          }]
      })
    }else if (index==1){
      that.setData({
        productList: [{
          id: 1,
          title: 'Philippe腕表',
          dec: '百达翡丽18K黄金/手动机械',
          price: 48000,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/1.png'
        }, {
          id: 2,
            title: 'Ramona翻盖腕表',
            dec: '古董18K黄金编织/石英机芯',
            price: 68900,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/2.png',
        },{
          id: 3,
          title: 'PIAGET钻石腕表',
          dec: '伯爵18k黄金钻石/石英机芯',
          price: 39800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/3.png'
        }, {
          id: 4,
            title: 'Ramona翻盖腕表',
            dec: '欧米茄14K黄金编织/手动机械',
            price: 49800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/4.png',
        },{
          id: 5,
            title: 'PlAGET古董腕表',
            dec: '伯爵18k黄金珊瑚/手动机械',
            price: 69800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/5.png',
        },]
      })
    }else if (index==3){
      that.setData({
        productList: [{
          id: 1,
          title: '邂逅时光',
          dec: '古董维多利亚时期14K黄金老花镜',
          price: 18800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/baijian/1.png'
        },]
      })
    }else{
      this.setData({
        productList: []
      })
    }
    //获取PHP数据
   
  },
  goToMore: function(e){
    wx.navigateTo({
      url: '/heyui-shop/pages/category/more/more?tid=' + this.data.curNav + '&category=' + this.data.nav_list[this.data.curNav - 1].name
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
    var that = this;
    // 获取分类
    var index = wx.getStorageSync('tid');
    if(!index){
      var index = 1;
    }
    that.setData({
      curNav: index,
      curIndex: index
    });
    if (index == 1) {
      that.setData({
        productList: [{
          id: 1,
          title: '一抹朱砂',
          dec: '古董18K金珊瑚水晶托戒指',
          price: 18900,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png'
        }, {
            id: 2,
            title: '心有灵犀',
            dec: '复古宫廷满钻戒指 钻石5克拉',
            price: 22800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
          }, {
            id: 3,
            title: '火树银花',
            dec: '古董14K黄金青金石/蓝松石/钻石套装',
            price: 39800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png'
          }, {
            id: 4,
            title: '假日花园',
            dec: '古董18K黄金cameo珍珠项链',
            price: 19800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/4.png'
          }, {
            id: 5,
            title: '玫瑰余香',
            dec: '意大利18K双色金拉丝手镯',
            price: 36800,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/5.png'
          }, {
            id: 6,
            title: '伊甸园',
            dec: '古董18K黄金珐琅彩蛇形手镯',
            price: 78000,
            pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/6.png'
          }]
      })
    }else if (index==2){
      that.setData({
        productList: [{
          id: 1,
          title: 'Philippe腕表',
          dec: '百达翡丽18K黄金/手动机械',
          price: 48000,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/1.png'
        }, {
          id: 2,
            title: 'Ramona翻盖腕表',
            dec: '古董18K黄金编织/石英机芯',
            price: 68900,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/2.png',
        },{
          id: 3,
          title: 'PIAGET钻石腕表',
          dec: '伯爵18k黄金钻石/石英机芯',
          price: 39800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/3.png'
        }, {
          id: 4,
            title: 'Ramona翻盖腕表',
            dec: '欧米茄14K黄金编织/手动机械',
            price: 49800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/4.png',
        }, {
          id: 5,
            title: 'PlAGET古董腕表',
            dec: '伯爵18k黄金珊瑚/手动机械',
            price: 69800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhongbiao/5.png',
        },]
      })
    }else if (index==4){
      that.setData({
        productList: [{
          id: 1,
          title: '邂逅时光',
          dec: '古董维多利亚时期14K黄金老花镜',
          price: 18800,
          pic: 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/baijian/1.png'
        },]
      })
    }else{
      this.setData({
        productList: []
      })
    }
    console.log(index)
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
        });
      }
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
    this.setData({
      curNav: '',
      curIndex: '',
    })
    wx.removeStorageSync('tid')
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