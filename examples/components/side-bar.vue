<template>
  <div class="mr-side-bar">
    <ul>
      <li
        v-for="(doc, index) in children"
        :key="index"
        class="route-item">
        <router-link :to="`/document/${doc.path}`" v-if="doc.path">{{doc.name}}</router-link>
        <div class="title" v-else>{{doc.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { children } from '@/router/document'

export default {
  data () {
    return {
      children
    }
  }
}
</script>

<style lang="less">
.mr-side-bar {
  width: 210px;
  .route-item {
    padding:7px 20px;
    &:first-child {
      font-weight: bold;
      color: #6abf47;
      font-size: 20px;
      padding: 8px 16px;
    }
    a {
      display: block;
      padding-left:15px;
    }
    &:hover a{
      color: #6abf47;
    }
    a.router-link-active {
      color: #6abf47;
    }
  }
}
</style>
