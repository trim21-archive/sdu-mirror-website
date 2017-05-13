<template>
  <div id="npmdoc">
    <div v-html="doc"></div>
  </div>
</template>

<script>
  import { npm } from './lib';

  export default {
    name: 'npmdoc',
    components: {},
    methods: {},
    data() {
      return {
        doc: npm.doc,
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };

</script>

<!-- Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    text-align: start;
  }
</style>