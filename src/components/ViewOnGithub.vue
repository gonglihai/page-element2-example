<!-- 在 Github 上查看 源码 -->
<template>
  <el-link class="view-on-github" :href="githubViewsUrl + $route.path + '.vue'" target="_blank">
    在 Github 上查看 {{ $route.path }}.vue
  </el-link>
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
  font-size: 12px;
  text-decoration: none;
}
</style>