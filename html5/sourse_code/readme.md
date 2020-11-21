# 源码分析

1. 今天会取名，明天
    取类名
    - .weui-btn
      btn 组件名 70%都是有框架提供的， 基础类
      weui 项目前缀 tb tm 项目组

2. css知识点
   -元素分为行内元素和块级元素  inline block inline-block
   -元素在页面上的占位， 由 内容（wh） padding border margin 
   position 盒子模型

3. 面向对象的css 
   -一个元素有多少个类
     .weui-btn  Block 基础类
     .weui-btn_primary Modifier(修饰符) 多态

4. 安装了一个插件
  -node js 前后端
  npm i -g live-server
  live-server 是一个web 服务器

5. 结构  
   结构套路 移动端页面  超越项目
   .page>.page__hd+.page__bd
   weui 项目组
   BEM 搭积木<!-- CSS命名规范-BEM -->
   Block 块 
   Element 子元素__<!--  这里要注意是两个下划线__ -->
   Modifier修饰符
   .zfb-tabbar
     .zfb-tabbar__item
     .zfb-tabbar__item_on

