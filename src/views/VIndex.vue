<template>
  <div class="v-index">
    <h1>Page-element2 使用示例</h1>
    <div class="buttons">
      <a href="https://page-element2.glh.red/" target="_blank">文档</a>
      <a class="github" href="https://github.com/gonglihai/page-element2-example" target="_blank">在 Github 上查看</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

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

.v-index .buttons {
  margin-top: 20px;
}

a {
  display: inline-block;
  padding: 7px 10px;
  background: #5672cd;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

a.github {
  background-color: #ebebef;
  color: black;
}

a+a {
  margin-left: 10px;
}
</style>