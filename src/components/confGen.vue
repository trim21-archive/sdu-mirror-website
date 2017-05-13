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
  /* eslint-disable no-unused-vars */
  const marked = require('marked');

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true,
  });

  export default {
    name: 'confGen',
    data() {
      return {
        distroList: ['npm', 'ubuntu'],
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