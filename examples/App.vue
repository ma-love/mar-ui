<template>
  <div id="app">
    <router-view v-if="isDocs" class="mr-docs"/>
    <router-view v-else class="mr-phone"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isDocs: true
    }
  },
  watch: {
    '$route' () {
      this.isDocs = /docs/.test(location.hash)
    }
  }
}
</script>
