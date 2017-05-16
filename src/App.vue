<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

          <Navbar></Navbar>
          <router-view></router-view>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from 'components/Navbar';

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  };

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