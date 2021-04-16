// pages/about/order/order.js
// import { Address } from '../../utils/address.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fromCartFlag: true,
    addressInfo: null,
    orderStatus: 1,
    'productsArr': [
      {
        'id': '1',
        'name': '一抹朱砂',
        'main_img_url': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/1.png',
        'desc': '古董18K金珊瑚水晶托戒指',
        'price': 18900,
        'counts': 1,
        'orderStatus': 1
      },{
        'id': '2',
        'name': '心有灵犀',
        'main_img_url': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/2.png',
        'desc': '复古宫廷满钻戒指 钻石5克拉',
        'price': 22800,
        'counts': 3,
        'orderStatus': 0
      },{
        'id': '3',
        'name': '花开见佛',
        'main_img_url': 'https://oss.geekxz.com/hey-ui-oss/heyui-shop/product/zhubao/3.png',
        'desc': '翡翠A货 黄翡花开见佛挂件',
        'price': 25800,
        'counts': 2,
        'orderStatus': 1
      },
      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var from = options.from;
    if(from=='cart'){
      that.setData({
        orderStatus: 0
      })
    }
    if(from=='order'){
      that.setData({
        orderStatus: 1,
        addressInfo: {
          name: "张三",
          mobile: "020-81167888",
        },
        basicInfo:'sss'
      })
    }
  },

  /*修改或者添加地址信息*/
  editAddress: function () {
    var that = this;
    wx.chooseAddress({
      success: function (res) {
        var addressInfo = {
          name: res.userName,
          mobile: res.telNumber,
          // totalDetail: address.setAddressInfo(res)
        };
        that._bindAddressInfo(addressInfo);

        //保存地址 更新到数据库
        // address.submitAddress(res, (flag) => {
        //   if (!flag) {
        //     that.showTips('操作提示', '地址信息更新失败！');
        //   }
        // });
      }
    })
  },
  goToGoodsDetail: function(){
    console.log('详情')
  },
  /*绑定地址信息*/
  _bindAddressInfo: function (addressInfo) {
    console.log(addressInfo)
    this.setData({
      addressInfo: addressInfo
    });
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