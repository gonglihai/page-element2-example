<template>
  <div id="app">
    <div class="app-menu">
      <router-link v-for="route in routes" :to="route.path" :key="route.path">{{ route.name }}</router-link>
    </div>
    <div class="app-content">
      <router-view />
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
  border-radius: 10px;
  transition: all .3s;
}

.app-menu a:hover{
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
</style>
