<template>
  <div class="mr-document flex">
    <mr-side-bar></mr-side-bar>
    <router-view class="document-wrapper"/>
  </div>
</template>

<script>
import MrSideBar from './side-bar'

export default {
  components: {
    MrSideBar
  }
}
</script>


