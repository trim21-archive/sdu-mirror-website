<template>
  <div id="mirList">

    <div class="row">

      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h2>镜像源信息</h2>
        <ul class="list-group">
          <li class="list-group-item" v-for="(value,key) in mirListDetail">
            {{ key }} : {{value}}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'mirList',
    components: {
    },
    /* eslint-disable quote-props */
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        mirListDetail: {
          ubuntu: new Date(2017, 1, 2),
          kali: new Date(2018, 2, 3),
        },
      };
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>