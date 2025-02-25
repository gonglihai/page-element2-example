<!-- 在 Github 上查看 源码 -->
<template>
  <a class="view-on-github" v-show="$route.path != '/'" :href="githubViewsUrl + $route.path + '.vue'" target="_blank">
    在 Github 上查看 {{ $route.path }}.vue
  </a>
</template>
<script>
export default {
  data() {
    return {
      // 示例的 github 仓库地址
      githubViewsUrl: 'https://github.com/gonglihai/page-element2-example/tree/main/src/views',
    }
  }
}
</script>
<style scoped>
.view-on-github {
  position: fixed;
  left: 50%;
  bottom: 0;
  background: #409eff;
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px 5px 0px 0px;
}
</style>