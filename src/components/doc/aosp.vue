<template>
  <div id="aosp">
    <div v-html="doc"></div>
  </div>
</template>

<script>
  import { aosp } from './lib';

  export default {
    name: 'aosp',
    components: {},
    methods: {},
    data() {
      return {
        doc: aosp.doc,
      };
    },
  };

</script>

<!-- Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    text-align: start;
  }
</style>