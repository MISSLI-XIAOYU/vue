<template>
  <div id="app">
   <olmap/>
  </div>
</template>

<script>
import olmap from './components/olmap.vue'

export default {
  name: 'App',
  components: {
    olmap
  }
}
</script>

<style>
    html, body, #app {
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
    }
</style>
