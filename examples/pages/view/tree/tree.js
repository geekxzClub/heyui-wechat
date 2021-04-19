
Page({
  data: {
    dataTree: [
      {
        id: 1,
        name: '河南省',
        children: [
          {
            id: 2,
            name: '信阳市',
            children: [
              {
                id: 3,
                name: '固始县'
              }
            ]
          },
          {
            id: 4,
            name: '南阳市',
          }
        ]
      },
      {
        id: 5,
        name: '上海市',
        children: [
          {
            id: 6,
            name: '闵行区',
          }
        ]
      }
    ],
    selectKey: '', //选中的节点id
    selectKey2: '', //选中的节点id
  },
  handleSelect(e) {
    if (e.detail.tips) {
      console.log('必须选择到最后一个节点')
    } else {
      this.setData({
        selectKey: e.detail.item.id
      })
    }
  },


  
  handleSelect2(e) {
    if (e.detail.tips) {
      console.log('必须选择到最后一个节点')
    } else {
      this.setData({
        selectKey2: e.detail.item.id
      })
    }
  },
  onLoad: function () {
  }
})
