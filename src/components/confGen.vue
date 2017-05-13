<template>
  <div id="confGen">
    <h2>使用说明</h2>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <!--<a class="btn btn-default" href="#" role="button">Link</a>-->
          <!--<button class="btn btn-default" type="submit">Button</button>-->
          <!--<input class="btn btn-default" type="button" value="Input">-->
          <!--<input class="btn btn-default" type="submit" value="Submit">-->
          <router-link to="/confgen/ubuntu" class='btn btn-default'>Ubuntu</router-link>
          <router-link to="/confgen/aosp" class='btn btn-default'>AOSP</router-link>
          <router-link to="/confgen/npm" class='btn btn-default'>npm</router-link>
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

<style>
  pre {
    text-align: start;
  }
</style>