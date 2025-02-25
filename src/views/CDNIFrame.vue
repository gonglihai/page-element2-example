<template>
  <div class="cdn-iframe">
    <div style="display: flex;">
      <span style="margin-right: 5px">在 iframe 内使用,</span>
      <el-link size="mini" @click="open" type="primary">新标签页打开<i class="el-icon-link el-icon--right"></i></el-link>
    </div>
    <iframe src="/cdn.html"></iframe>
  </div>
</template>
<script>
export default {
  methods: {
    open() {
      window.open('/cdn.html')
    }
  }
}
</script>
<style scoped>
.cdn-iframe {
  display: flex;
  flex-direction: column;
  align-items: start;

  font-size: 14px;
}

.cdn-iframe>iframe {
  border: none;
  margin-top: 10px;
  border: 1px solid #DCDFE6;
  flex: auto;
  width: 100%;
  box-sizing: border-box;
}
</style>