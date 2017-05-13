<template>
  <div id="confGen">
    <h2>使用说明</h2>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'confGen',
    data() {
      return {
        distro: 'ubuntu',
        version: 'artful',
      };
    },
  };

</script>

<style scoped>
  pre {
    text-align: start;
  }
</style>