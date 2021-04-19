// pages/common/comTree/index.js
 Component({
  /**
   * 组件的属性列表
   */
  
  externalClasses: ['h-tree-class'],
  properties: {
    dataTree: {
      type: Array,
      value: []
    },
    selectKey: { // 选中的节点id
      type: String,
      value: ''
    },
    isSelectLastNode: { //是否必须选中最后一节点
      type: Boolean,
      value: false
    },
    isOpenAll: { //是否展开全部节点
      type: Boolean,
      value: false
    }
  },
  observers: {
    'dataTree': function(params) {
      params.forEach(v => {
        v.open = this.properties.isOpenAll // 是否展开
      })
      this.setData({
        tree: params
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    tree: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isOpen(e) {
      const open = 'tree[' + e.currentTarget.dataset.index + '].open'
      this.setData({
        [open]: !this.data.tree[e.currentTarget.dataset.index].open
      })
    },
    select(e) {
      const item = e.currentTarget.dataset.item
      if(this.properties.isSelectLastNode) {
        console.log(item)
        if (!item.children || item.children.length == 0) {
          this.triggerEvent('select', { item: item }, { bubbles: true, composed: true })
        } else {
          this.triggerEvent('select', { tips: '必须选择最后一个节点' }, { bubbles: true, composed: true })
        }
      } else {
        this.triggerEvent('select', { item: item }, { bubbles: true, composed: true })
      }
    }
  }
})
