import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/OnlyTable',
    name: '只有表格',
    component: () => import('../views/OnlyTable.vue')
  },
  {
    path: '/SearchButtonTable',
    name: '查询、按钮、表格',
    component: () => import('../views/SearchButtonTable.vue')
  },
  {
    path: '/AllTable',
    name: '树、查询、按钮、表格',
    component: () => import('../views/AllTable.vue')
  },
  {
    path: '/DialogTable',
    name: '弹出框',
    component: () => import('../views/DialogTable.vue')
  },
  {
    path: '/SearchTypes',
    name: '查询条件类型',
    component: () => import('../views/SearchTypes.vue')
  },
  {
    path: '/ToolButton',
    name: '工具栏按钮',
    component: () => import('../views/ToolButton.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
