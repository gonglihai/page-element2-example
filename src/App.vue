<template>
  <div id="app">

    <!-- 菜单 -->
    <RouterMenu></RouterMenu>

    <div class="app-right">

      <div class="app-content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>

      <!-- 在 Github 上查看 -->
      <div  v-show="$route.path != '/'" style="flex: none; padding: 10px; background: #EBEEF5">
        <ViewOnGithub></ViewOnGithub>
      </div>
    </div>
  </div>
</template>
<script>
import RouterMenu from './components/RouterMenu.vue';
import ViewOnGithub from './components/ViewOnGithub.vue';


export default {
  name: 'App',
  components: {
    RouterMenu, ViewOnGithub
  },
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

.app-right {
  display: flex;
  flex-direction: column;
  flex: auto;
  overflow: hidden;
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
