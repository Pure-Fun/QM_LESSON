应用只是页面？需要路由，路由接管一切。
按url分发组件 (Page级别组件)
根路由App
  -> path '/' 页面A级别组件(Page)->(容器组件Container -> 函数式组件(Present))
  -> path '/about' 页面B级别组件(Page)->(容器组件Container -> 函数式组件(Present))
