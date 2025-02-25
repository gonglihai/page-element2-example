const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      title: 'Page.vue 使用示例',
      entry: 'src/main.js'
    }
  }
})
