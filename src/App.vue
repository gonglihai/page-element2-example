<template>
  <div id="app">

    <!-- 菜单 -->
    <RouterMenu></RouterMenu>

    <div class="app-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <!-- 底部在 Github 上查看 -->
    <ViewOnGithub></ViewOnGithub>
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
