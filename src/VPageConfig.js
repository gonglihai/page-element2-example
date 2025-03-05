// page.vue 全局配置
// 见 https://page-element2.glh.red/doc/%E8%B5%B7%E6%AD%A5/%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE.html
export default {
  button: {
    // size: 'mini'
  },
  tree: {
    width: '200px',
    
  },
  table: {
    colType: {
      age: () => import('./components/colType/ColTypeAge.vue'), // 添加列类型, 动态年龄, type: 'age'
      img: () => import('./components/colType/ColTypeImg.vue'), // 添加列类型, 图片, type: 'img'
    }
  }
}