<template>
  <div class="navbar">
    <ul class="nav nav-pills" role="tablist">
      <li role="presentation"><a href="#">源列表</a></li>
      <li role="presentation"><a href="#">配置生成器</a></li>
      <li role="presentation"><a href="#">安装镜像</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
  background: #20A0FF
}

a {
  color: #FFFFFF
}
</style>