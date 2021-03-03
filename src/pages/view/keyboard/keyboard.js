// pages/view/keyboard/keyboard.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isDefault: false,  //切换 新能源车牌和 普通车牌
    result: [], // 被点击的 按钮值
    isCityKeyboard: true, //切换 地址键盘和 数字键盘
    numLen: 7, // 车牌位数长度 新能源车牌 8位 普通牌 7位
    idx: 0, // 控制 输入框的选中状态
  },

  onReady(e) {
    // 获取 软键盘组件
    this.softKeyboard = this.selectComponent("#softKeyboard");
  },
  onload() {

  },

  // 切换 普通拍照和新能源拍照
  checkboxChange(e) {
    let len = e.detail.value.length;
    let { result, idx } = this.data;
    let val = len ? true : false;
    let numLen = val ? 8 : 7;
    // 如果新能源输满以后，切换到普通牌照
    // console.log(result.length, val, numLen)
    if (result.length === 8 && !val) {
      result = [...result.slice(0, 7)];
      idx = numLen - 1;
    }
    // 如果 普通拍照 输入满 ，切换到新能源拍照， 更新 标签 active 状态
    // 或者继续上边的状态再切换会 普通牌照
    if (result.length === 7 && val || result.length === 7 && !val) {
      idx = numLen - 1;
    }

    this.setData({
      isDefault: val,
      numLen,
      result,
      idx
    })
  },

  // 常规按钮点击事件
  _handleKeyClick(e) {
    let { val, disabled } = e.detail.val;
    if (disabled) return;
    let { result, isCityKeyboard, idx, numLen } = this.data;
    if (result.length >= numLen) return;
    result.push(val);
    isCityKeyboard = result.length >= 1 ? false : true;
    idx = result.length >= numLen ? numLen - 1 : result.length;
    this.setData({
      result,
      isCityKeyboard,
      idx
    })
  },

  //删除按钮点击事件
  _handleDeleteClick(e) {
    let { result, isCityKeyboard, idx, numLen } = this.data;
    result.pop();
    isCityKeyboard = result.length >= 1 ? false : true;
    idx = result.length >= numLen ? numLen - 1 : result.length;
    // idx = result.length <= 0 ? 0 : result.length - 1;   // 另一种删除后选中状态变化操作，暂时保留
    this.setData({
      result,
      isCityKeyboard,
      idx
    })
  },

  // ABC 和 返回 按钮点击事件
  _handleToggleClick(e) {
    let val = e.detail.val;
    let isCityKeyboard = val === 'ABC' ? false : true;
    this.setData({
      isCityKeyboard
    })
  }


})