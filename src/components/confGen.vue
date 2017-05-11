<template>
  <div id="confGen">
    <h2>配置生成器</h2>
    <div class="row">
      <!--
              <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <select v-model="distro" class="form-control">
                    <option version="ubuntu">ubuntu</option>
                    <option version="kali">kali</option>
                    <option version="npm">npm</option>
                  </select>
              </div>-->
  
      <ubuntu></ubuntu>
      <h2>配置生成器</h2>
  
    </div>
  </div>
</template>

<script>
import ubuntu from './doc/ubuntu';

export default {
  name: 'confGen',
  components: {
    ubuntu,
  },
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