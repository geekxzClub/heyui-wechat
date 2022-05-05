Component({
  /**
   * 组件的属性列表
   */
  properties: {
 
  },
  /**
   * 配置引入外部样式
   */
  externalClasses: ['h-bg-class', 'h-text-class','h-track-bg-class','h-movable-view-bg-class','h-icon-class','h-icon-df-class'],
 
  /**
   * 组件的初始数据
   */
  data: {
    x: 0,
    oldx: 0,
    isOk: false,
    size: {}
  },
  ready(){
    let getSize = (selector) => {
      return new Promise((resolve, reject) => {
        let view = wx.createSelectorQuery().in(this).select(selector);
        view.fields({
          size: true,
        }, (res) => {
          resolve(res.width);
        }).exec();
      });
    }
    getSize("#pathway").then((res1) => {
      this.data.size.pathway = res1;
      getSize("#track").then((res2) => {
        this.data.size.track = res2;
      });
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      this.setData({
        oldx: e.detail.x
      })
    },
    onEnd(){
      if (this.data.isOk) {
        return;
      }
      if ((this.data.oldx + 1) > (this.data.size.pathway - this.data.size.track)) {
        this.setData({
          isOk:true
        },()=>{
          this.triggerEvent('verify');
        });
      } else {
        this.setData({
          x: 0,
          oldx: 0
        })
      }
    }
  }
})