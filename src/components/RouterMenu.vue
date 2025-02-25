<!-- 左侧路由菜单 -->
<template>
  <div class="app-menu">
    <template v-for="l1 in routes">
      <div class="menu-l2" v-if="l1.children" :key="l1.path">
        <div>{{ l1.name }}</div>

        <!-- 二级菜单 -->
        <router-link v-for="l2 in l1.children" :to="l1.path + '/' + l2.path" :key="l1.path + '/' + l2.path" :class="{
          'active': $route.path === l1.path + '/' + l2.path,
        }">
          {{ l2.name }}
        </router-link>
      </div>

      <!-- 一级菜单 -->
      <router-link v-else :to="l1.path" :key="l1.path" :class="{
        'active': $route.path === l1.path,
      }">
        {{ l1.name }}
      </router-link>
    </template>

  </div>
</template>
<script>
import { routes } from '../router'

export default {
  data() {
    return {
      // 路由数据, 左侧菜单的数据源
      routes
    }
  }
}
</script>
<style scoped>
.app-menu {
  width: 250px;
  display: flex;
  flex-direction: column;
  flex: none;
  padding: 10px;
  background: #181818;
}

.app-menu a {
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 3px;
  transition: all .3s;
}

.app-menu a:hover {
  background: #37373d;
}

.app-menu a.active {
  background: #409eff;
}

.menu-l2 {
  width: 100%;
  color: gray;
}

.menu-l2>div {
  margin: 10px;
  font-size: 14px;
}

.menu-l2>a {
  display: block;
}
</style>