// pages/luckdraw/luckdraw.js
var app = getApp()

let timer;
let cjIn = false;
let cjChange = 0; //抽奖过程KEY
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: 0,
    windowHeight: 0,
    circleList: [],//圆点数组
    awardList: [],//奖品数组
    colorCircleFirst: '#FFDF2F',//圆点颜色1
    colorCircleSecond: '#FE4D32',//圆点颜色2
    prizeList: [
      { id: '001', index: 1, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称111' },
      { id: '002', index: 2, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称222' },
      { id: '003', index: 3, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称333' },
      { id: '004', index: 4, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称444' },
      { id: '005', index: 5, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称555' },
      { id: '006', index: 6, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称666' },
      { id: '007', index: 7, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称777' },
      { id: '008', index: 8, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '奖品名称88888888888888' },
    ],
    cjChange: null, //抽奖过程KEY
    prizeResult: null, //抽奖结果KEY
    prizeName: null, //抽奖结果KEY对应的奖品名称
    showAgain: false, //是否抽奖后显示再抽一次按钮
  },






  //抽奖操作
  cj() {
    if (cjIn) {
      return;
    } else {
      cjIn = true;
    }
    let This = this;
    clearInterval(timer);
    timer = setInterval(This.changePrize, 80);

    // test start
    // 中奖结果
    let res = {
      stutus: 1,
      prizeResult: 2,
      prizeName: '奖品名称2',
    }
    if (res.stutus == 1) {
      setTimeout(function () {
        clearInterval(timer);
        timer = setInterval(This.changePrize, 160);
        setTimeout(function () {
          clearInterval(timer);
          timer = setInterval(This.changePrize, 300);

          setTimeout(function () {
            This.setData({
              prizeResult: res.prizeResult,
              prizeName: res.prizeName,
            });
          }, 1000)
        }, 1000)
      }, 2000)
    }
    // test end
  },
  //抽奖过程奖品切换
  changePrize() {
    cjChange++;
    cjChange = cjChange > 8 ? 1 : cjChange;
    let This = this;
    This.setData({
      cjChange: cjChange
    });
    if (This.data.prizeResult == cjChange) {
      clearInterval(timer);
      This.setData({
        showAgain: true
      });
      console.log('获得奖品：' + This.data.prizeName)
    }
  },
  //点击再抽一次按钮
  againBtn() {
    cjIn = false;
    cjChange = 0; //抽奖过程KEY

    let This = this;
    This.setData({
      cjChange: null, //抽奖过程KEY
      prizeResult: null, //抽奖结果KEY
      prizeName: null, //抽奖结果KEY对应的奖品名称
      showAgain: false, //是否抽奖后显示再抽一次按钮
    });
  },







  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 把设备的尺寸赋值给画布，以做到全屏效果
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        });
      },
    })
    //圆点设置
    var leftCircle = 7.5;
    var topCircle = 7.5;
    var circleList = [];
    for (var i = 0; i < 24; i++) {
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      } else if (i == 6) {
        topCircle = 15
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 94;
        leftCircle = 620;
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 570;
        leftCircle = leftCircle - 102.5;
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 94;
        leftCircle = 7.5;
      } else {
        return
      }
      circleList.push({ topCircle: topCircle, leftCircle: leftCircle });
    }
    this.setData({
      circleList: circleList
    })

    //圆点闪烁
    setInterval(function () {
      if (_this.data.colorCircleFirst == '#FFDF2F') {
        _this.setData({
          colorCircleFirst: '#FE4D32',
          colorCircleSecond: '#FFDF2F',
        })
      } else {
        _this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#FE4D32',
        })
      }
    }, 500)//设置圆点闪烁的效果
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