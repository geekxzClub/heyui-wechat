Component({
  externalClasses: ['h-toast-class'],
  properties: {
  },
  data: {
    dataText: '',
    icon:'',
    showToast: false,
    isUserImg:false,
    imgPath:''
  },
  methods: {
    //展示弹框
    showToast(data) {
      var _this = this
      _this.setData({
        showToast: true,
        dataText: data.content,//设置提示内容
        isUserImg: data.image?true:false,//是否展示用户自定义图片
        imgPath: data.image,//用户自定义图片
        iconType:data.icon//设置提示图片类型
      })
      // 定时器关闭弹框  
      setTimeout(function () {
        _this.setData({
          showToast: false
        })
      }, 2000);
    }
  }
})