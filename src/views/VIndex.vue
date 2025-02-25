<template>
  <div class="v-index">
    <h1>Page-element2 使用示例</h1>
    <div style="margin-top: 40px;">
      <el-button type="primary" @click="open('https://page-element2.glh.red/')">使用文档</el-button>
      <el-button @click="open('https://github.com/gonglihai/page-element2-example')">Github</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    open(url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
.v-index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>