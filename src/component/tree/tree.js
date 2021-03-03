// components/tree/tree.js
Component({
  properties: {
    tree: {
      type: Array,
      observer: function(newValue, oldValue) {
        let initIds = this.data.tree.map(n => this.findAllId(n, this.data.initMemberId))[0]
        if (initIds) {
          this.setData({
            initIds
          })

          // initIds只在目录树载入时用一次，一秒后重置initIds为空
          setTimeout(_=>{
            this.setData({
              initIds: ['xxxxx']
            })
          },1000)
        }
      }
    },
    initMemberId: {
      type: String
    }
  },

  data: {
    topViewId: '',
    initIds: [],
    selectedId: ''
  },

  created: function() {
    wx.getSystemInfo({
      success: res => {
        this.height = res.screenHeight / 3
      },
    })
  },

  methods: {
    selectChange(e) {
      // 事件批量触发的时候去抖
      clearTimeout(this.timer)
      this.timer = setTimeout(_ => {
        this.setData({
          top: e.detail.level * this.height,
          selectedId: e.detail.id
        })
      }, 200)
    },
    findAllId(obj, id) {
      let allId = [id]

      function findParentId(obj, id) {
        for (let attr in obj) {
          if (obj[attr] == id && attr == 'id') {
            return obj.parentId
          }
          if (obj[attr] instanceof Array && attr == 'members') {
            for (let i = 0; i < obj[attr].length; i++) {
              let parentId = findParentId(obj[attr][i], id)
              if (parentId) {
                return parentId
              }
            }
          }
        }
      }

      function collectPid(obj, id) {
        let pId = findParentId(obj, id)
        if (pId) {
          allId.push(pId)
          collectPid(obj, pId)
        }
      }

      collectPid(obj, id)
      return allId
    }
  }
})