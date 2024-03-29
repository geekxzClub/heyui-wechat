// pages/view/barrage/barrage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconGood: '/images/dm/icon-good.png',
    avatarBoy: '/images/dm/icon_avatar_boy.png',
    avatarGirl: '/images/dm/icon_avatar_girl.png',
    iconBoy: '/images/dm/icon-boy.png',
    iconGirl: '/images/dm/icon-girl.png',
    baseData: [{
      "id": 786,
      "sex": 1,
      "content": "我今年23岁，老家在安徽，目前在北京工作，独立、善良、孝顺都是我的优点。比较喜欢有担当，有主见的男生，如果他再有点小幽默就更好了，还有身高不要低于175cm。如果有合适的小哥哥，我么可以聊聊啊~",
      "zanNumber": 27
    }, {
      "id": 854,
      "sex": 1,
      "content": "我是山东人，现在在上海工作，在异乡漂泊真的很孤独，很想有个人能陪伴我。过完年我就27岁了，性格比较内向，想找一个能读懂我内心的人，哪儿人都可以，年龄不要相差太大，奔着结婚去的，我很真诚，希望你也能够认真真诚。",
      "zanNumber": 14
    }, {
      "id": 1022,
      "sex": 1,
      "content": "年芳27湖南人氏",
      "zanNumber": 14
    }, {
      "id": 1103,
      "sex": 1,
      "content": "我是广东的妹子，喜欢旅游，性感比较开朗，想找个顾家，宠老婆，又东浪漫的男朋有，希望在着遇到有缘人～",
      "zanNumber": 10
    }, {
      "id": 1005,
      "sex": 0,
      "content": "本人男，30岁了，北京人，有车有房，想找个漂亮的四川妹子，聊聊看",
      "zanNumber": 7
    }, {
      "id": 1214,
      "sex": 1,
      "content": "湖北人 在北京工作。今年27 我是你的前女友 也曾拯救过地球 身高刚好169 快来找我复合吧。我不是颜控 喜欢有才华 有爱心 幽默的男生，身高175以上。理想型 李诞 一样的诗人\uD83D\uDC7B",
      "zanNumber": 6
    }, {
      "id": 1207,
      "sex": 1,
      "content": "我今年25岁，是来自东北的妹子。平时喜欢美食、看书，想找一个178cm以上，白白净净的男生。",
      "zanNumber": 5
    }, {
      "id": 1227,
      "sex": 1,
      "content": "我是川妹子今年23岁~目前在北京打工，做酒店行业的，平时除了工作一个人比较孤单，想找个聊得来的小哥哥，一起回家过年",
      "zanNumber": 4
    }, {
      "id": 1206,
      "sex": 1,
      "content": "我是河北人，目前在北京工作，刚毕业，想找个有稳定工作的男朋友，颜值不必很高，有眼缘就行，但是一定要有责任心，奔着结婚去的，非诚勿扰哈～",
      "zanNumber": 3
    }, {
      "id": 799,
      "sex": 0,
      "content": "我是江西男孩。今年28岁，在一个公司上班。找一个温柔体贴的女",
      "zanNumber": 10
    }, {
      "id": 859,
      "sex": 0,
      "content": "湖南人在广州，找个过圣诞的妹子，最好以后每个圣诞一起过！",
      "zanNumber": 7
    }, {
      "id": 825,
      "sex": 0,
      "content": "我26，云南，哈哈！是个人就行。",
      "zanNumber": 6
    }, {
      "id": 861,
      "sex": 0,
      "content": "江苏人现居上海，28，171，54。喜欢可爱的女孩，求勾搭",
      "zanNumber": 3
    }],
    copyRight: '访问www.hey-ui.com, 获取更多小程序.',
    dmData: [],
    symbolLeft: '{{',
    symbolRight: '}}',
  },
  // 处理弹幕位置
  setDM: function () {
    // 处理弹幕参数
    const dmArr = [];
    const _b = this.data.baseData;
    for (let i = 0; i < _b.length; i++) {
      const _p = {
        id: _b[i].id,
        sex: _b[i].sex,
        content: _b[i].content,
        zanNumber: _b[i].zanNumber
      };
      dmArr.push(_p);
    }
    this.setData({
      dmData: dmArr
    });
  },

  // 处理弹幕位置
  setDM2: function () {
    // 处理弹幕参数
    const dmArr = [];
    const _b = this.data.baseData;
    for (let i = 0; i < _b.length; i++) {
      const time = Math.floor(Math.random() * 10);
      const _time = time < 6 ? 6 + i : time + i;
      const top = Math.floor(Math.random() * 80) + 2;
      const _p = {
        id: _b[i].id,
        sex: _b[i].sex,
        content: _b[i].content,
        zanNumber: _b[i].zanNumber,
        top,
        time: _time,
      };
      dmArr.push(_p);
    }
    this.setData({
      dmData: dmArr
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setDM();
    this.setDM2();
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