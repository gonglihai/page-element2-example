<template>
  <div id="app">
    <div class="app-menu">
      <template v-for="l1 in routes">
        <div class="l2" v-if="l1.children" :key="l1.path">
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
    <div class="app-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import { routes } from './router'
export default {
  name: 'App',
  data() {
    return {
      routes
    }
  },
  methods: {
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
}

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

.app-content {
  flex: auto;
  padding: 10px;
  overflow: auto;
}

.app-content>div {
  height: 100%;
  width: 100%;
}

.l2 {
  width: 100%;
  color: gray;
}

.l2>div {
  margin: 10px;
  font-size: 14px;
}

.l2>a {
  display: block;
}
</style>
