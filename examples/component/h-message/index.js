Component({
  properties: {

  },
  data: {
    text: '',
    showToast: false
  },
  methods: {
    //展示弹框
    showToast(data) {
      var _this = this
      _this.setData({
        showToast: true,
        text: data.content,//设置提示内容
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