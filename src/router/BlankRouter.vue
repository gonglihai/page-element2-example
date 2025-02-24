<!-- 空白占位路由, 实现类似 router4 嵌套路由 忽略父组件
     见: https://router.vuejs.org/zh/guide/essentials/nested-routes.html#%E5%BF%BD%E7%95%A5%E7%88%B6%E7%BB%84%E4%BB%B6-
-->
<template>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>