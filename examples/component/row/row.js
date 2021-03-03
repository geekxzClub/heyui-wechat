Component({
  properties: {
    members: {
      type: Array,
      observer: function(members) {
        if (members) {
          // 每一行取中间元素
          let initIndex = Math.floor(members.length / 2)
          this.setData({
            current: members[initIndex],
            currentIndex: initIndex
          })
        }
      }
    },
    selectedId: {
      type: String
    },
    initIds: {
      type: Array
    }
  },

  data: {
    currentIndex: 0,
    current: null
  },

  ready() {
    let initIds = this.data.initIds
    let currentIndex = this.data.members.findIndex(n => initIds.indexOf(n.id) !== -1)
    if (currentIndex !== -1) {
      setTimeout(_ => {
        this.setData({
          currentIndex
        })
        this.triggerEvent('selectChange', this.data.members[this.data.currentIndex], {
          bubbles: true,
          composed: true
        })
      }, 100)
    }else{
      // 每一行取中间元素
      let initIndex = Math.floor(this.data.members.length / 2)
      this.setData({
        current: this.data.members[initIndex],
        currentIndex: initIndex
      })
    }
  },

  methods: {
    itemChange(e) {
      let current = this.data.members[e.detail.current]
      this.setData({
        current
      })
    },
    itemTap(e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('selectChange', this.data.members[this.data.currentIndex], {
        bubbles: true,
        composed: true
      })
    }
  }
})