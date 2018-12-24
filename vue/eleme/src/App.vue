<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from 'components/header/header.vue';
const response = require('./common/data/seller.json');
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    // fetch() axios
    this.seller = Object.assign({}, this.seller, response.data)
  },
  components: {
    'v-header': header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
