<template>
  <div class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TarBar />
  </div>
</template>

<script>
import {TarBar} from '@/components/'
export default {
  name: 'App',
  components: {
    TarBar
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #f7f7f7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
