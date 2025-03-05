import Vue from 'vue'
import VueRouter from 'vue-router'

import BlankRouter from '../components/BlankRouter.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/VIndex.vue')
  },
  {
    path: '/CDNIFrame',
    name: 'CDN 方式安装',
    component: () => import('../views/CDNIFrame.vue')
  },
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
    path: '/SearchTypes',
    name: '查询条件类型',
    component: () => import('../views/SearchTypes.vue')
  },
  {
    path: '/ToolButton',
    name: '工具栏按钮',
    component: () => import('../views/ToolButton.vue')
  },
  {
    path: '/advanced',
    name: '进阶用法',
    component: BlankRouter,
    children: [
      {
        path: 'InDialog',
        name: '在弹出框内',
        component: () => import('../views/advanced/InDialog.vue')
      },
      {
        path: 'VSelect',
        name: '数据选择',
        component: () => import('../views/advanced/VSelect.vue')
      },
      {
        path: 'CustomTableColType',
        name: '自定义表格列类型',
        component: () => import('../views/advanced/CustomTableColType')
      }
    ]
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
