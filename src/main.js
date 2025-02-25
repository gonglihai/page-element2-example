import Vue from 'vue'
import App from './App.vue'

// 路由
import router from './router'

// 引入并注册 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入并注册 page.vue
import VPage from 'page-element2';
// page.vue 全局配置
import VPageConfig from './VPageConfig';
Vue.use(VPage, {
  config: VPageConfig
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
