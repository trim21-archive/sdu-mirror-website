<template>
  <div class="confGen">
    <h2>配置生成器</h2>
    <div>
      <div class="row">

        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select v-model="selected" class="form-control">
               <option value="artful">artful (17.10)</option>
               <option value="zesty">zesty (17.04)</option>
               <option value="yakkety">yakkety (16.10)</option>
               <option value="xenial">xenial (16.04)</option>
               <option  value="wily">wily (15.10)</option>
               <option  value="vivid">vivid (15.04)</option>
               <option  value="utopic">utopic (14.10)</option>
               <option value="trusty">trusty (14.04)</option>
               <option value="saucy">saucy (13.10)</option>
               <option value="raring">raring (13.04)</option>
               <option value="quantal">quantal (12.10)</option>
               <option value="precise">precise (12.04)</option>
            </select>
          <!--<span>Selected: {{ selected | capitalize }}</span>-->
        </div>
      </div>
    </div>
    <br>
    <pre>{{ selected | capitalize }}</pre>
  </div>
</template>

<script>
  export default {
    name: 'confGen',
    filters: {
      capitalize: function a(value) {
        if (!value) return '';
        const st = `deb http://mirror.sdu.edu.cn/ubuntu/ ${value} main restricted universe multiverse
deb http://mirror.sdu.edu.cn/ubuntu/ ${value}-security main restricted universe multiverse
deb http://mirror.sdu.edu.cn/ubuntu/ ${value}-updates main restricted universe multiverse
# deb http://mirror.sdu.edu.cn/ubuntu/ ${value}-proposed main restricted universe multiverse
# deb http://mirror.sdu.edu.cn/ubuntu/ ${value}-backports main restricted universe multiverse
deb-src http://mirror.sdu.edu.cn/ubuntu/ ${value} main restricted universe multiverse
deb-src http://mirror.sdu.edu.cn/ubuntu/ ${value}-security main restricted universe multiverse
deb-src http://mirror.sdu.edu.cn/ubuntu/ ${value}-updates main restricted universe multiverse
# deb-src http://mirror.sdu.edu.cn/ubuntu/ ${value}-proposed main restricted universe multiverse`;
        return st;
      },
    },
    data() {
      return {
        selected: 'zesty',
      };
    },
  };

</script>

<style scoped>
  pre {
    text-align: start;
  }
</style>