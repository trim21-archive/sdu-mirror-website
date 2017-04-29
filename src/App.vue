<template>
  <div id="app">
    <div class="container">
      <div class="row">


        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Navbar></Navbar>
          <Card></Card>
          <mirList></mirList>
          <confGen></confGen>
          <p>about us</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import 'bootflat/css/bootstrap.min.css';
  import Card from './components/Card';
  import Navbar from './components/Navbar';
  import mirList from './components/mirList';
  import confGen from './components/confGen';

  export default {
    name: 'app',
    components: {
      Card,
      mirList,
      confGen,
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