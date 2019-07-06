<template>
  <div>
    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>

    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562398934312&di=e82a0b5a75e0e1ae95ce052fe27a83bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F22%2F20160122003337_ZxyWu.jpeg" alt="">
  </div>

</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style type="text/css">
  img {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 30%;
    left: 25%;

  }
</style>