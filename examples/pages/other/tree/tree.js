
Page({
  data: {
    dataTree: [
      {
        id: 1,
        pid: 0,
        name: '河南省',
        children: [
          {
            id: 2,
            pid: 1,
            name: '信阳市',
            children: [
              {
                id: 3,
                pid: 2,
                name: '固始县'
              }
            ]
          },
          {
            id: 4,
            pid: 1,
            name: '南阳市',
          }
        ]
      },
      {
        id: 5,
        pid: 0,
        name: '上海市',
        children: [
          {
            id: 6,
            pid: 5,
            name: '闵行区',
          }
        ]
      }
    ],
    selectKey: '', //选中的节点id
    selectKey2: '', //选中的节点id
    selectKey3: '', //选中的节点id
  },
  handleSelect(e) {
    if (e.detail.tips) {
      console.log('必须选择到最后一个节点')
    } else {
      this.setData({
        selectKey: e.detail.item.id
      })
      var data =this.findPatentValue(this.data.dataTree, e.detail.item.name,'name','children').join('-')
      this.dialog(data)
    }
  },
  
  handleSelect2(e) {
    if (e.detail.tips) {
      console.log('必须选择到最后一个节点')
    } else {
      this.setData({
        selectKey2: e.detail.item.id
      })
      var data =this.findPatentValue(this.data.dataTree, e.detail.item.name,'name','children').join('-')
      this.dialog(data)   
    }
  },
  handleSelect3(e) {
    if (e.detail.tips) {
      console.log('必须选择到最后一个节点')
    } else {
      this.setData({
        selectKey3: e.detail.item.id
      })
      var data =this.findPatentValue(this.data.dataTree, e.detail.item.name,'name','children').join('-')
      this.dialog(data)
    }
  },
  dialog(data){
    wx.showModal({
      title: '你选择啦',
      content: data,        
      cancelText: '重选',
      confirmText: '好的',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 通过子节点找父节点
  findPatentValue(tree, value, valueName = 'valuename', childrenName = 'children'){
      if (!value || !Array.isArray(tree)) return []
      const result = []
      let valid = false
      const seek = (tree, value) => {
          let parentValue = ''
          const up = (tree, value, lastValue) => {
            tree.forEach(v => {
                  const val = v[valueName]
                  const child = v[childrenName]
                  if (val === value) {
                      valid = true
                      parentValue = lastValue
                      return
                  }
                  if (child && child.length) up(child, value, val)
              })
          }
          up(tree, value)
          if (parentValue) {
              result.unshift(parentValue)
              seek(tree, parentValue)
          }
      }
      seek(tree, value)
      return valid ? [...result, value] : []
  },

  onLoad: function () {
  }
})
