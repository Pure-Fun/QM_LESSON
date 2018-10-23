- Component 组件
  来自于Facebook 用搭积木的概念来类比做网站。
  我们的网页不再是由标签这个原子级别的构成， div+css
  由组件构成 swiper scroll-view mapview 一块积木，具有特写的功能或表现
  区块， 功能块的
  calendar 组件， 第三方

- 自定义的组件开发
  components是MVVM架构的核心，它和pages平级
  components 构成page .json文件,
  {
      'usingComponents': {
          'icon': '../../components/icon/index'
      }
  }
  icon组件
  在应用中， 会用到一些图标， 字体图标
  edit add map home
  alley iconfont ttf 文件， 样式
  相对独立的一个组件
  可以在多个页面复用?