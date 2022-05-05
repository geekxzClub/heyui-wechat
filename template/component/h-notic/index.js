Component({
  /**
   * 组件的属性列表
   * 
   * comTipsOpts：{
   *  tipsContent 需要展示的文案--必传
   *  speedFactor 速度系数（文案length*系数=播放速度）
   *  clientwidth 视口宽度（rpx）
   *  fontSize 字体大小（rpx）
   * }
   */
  properties: {
    comTipsOpts: {
      type: Object,
      default: {
        tipsContent: "微信小程序--基于CSS3 animation，公告类滚动-可配置组件",
        speedFactor: 0.45,
        clientwidth: 700,
        fontSize: 24
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tipsWidth: "",
    speed: 20,
    clientwidth: ""
  },
  attached() {
    let fontLength = this.data.comTipsOpts.tipsContent.split("").length
    this.setData({
      tipsWidth: fontLength * this.data.comTipsOpts.fontSize,
      speed: fontLength * this.data.comTipsOpts.speedFactor,
      clientwidth: this.data.comTipsOpts.clientwidth
    })
    console.log(this.data.comTipsOpts.tipsContent)
  },
})