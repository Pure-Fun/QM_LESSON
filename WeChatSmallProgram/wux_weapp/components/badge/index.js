Component({
  externalClasses: ['wux-class-badge'],
  /**
   * 组件的属性列表
   */
  properties: {  
    count:{
      type: Number,
      value: 0,
      observer(newVal) {
        const { overflowCount } = this.data
        const finalCount = newVal >= overflowCount? `${overflowCount}+` : newVal
        this.setData({
          finalCount
        })
      }
    },
    overflowCount:{
      type: Number,
      value: 99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // count外来
    // 
    finalCount: 0
    // ?内部数据
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
