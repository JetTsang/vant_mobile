<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from './layout/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
<style lang="less">
#app { 
  background-color: @gray-9;
  height: 100vh;
}
</style>
