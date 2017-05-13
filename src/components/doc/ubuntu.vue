<template>
  <div class="ubuntu">

    <div class="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <p v-for="item in ubuntu">{{item}}</p>
        <select v-model="ver" class="form-control">
          <option v-for="item in version" :value='item.key'>{{item.name}}</option>
        </select>
      </div>

      <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <pre>{{gen(ver)}}</pre>
          <div v-html="doc"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { ubuntu } from './lib';

  export default {
    name: 'ubuntu',
    methods: {
      gen: ubuntu.gen,
    },
    data() {
      return {
        doc: ubuntu.doc,
        ver: 'yakkety',
        version: ubuntu.version,
      };
    },
  };

</script>

<style scoped>

</style>