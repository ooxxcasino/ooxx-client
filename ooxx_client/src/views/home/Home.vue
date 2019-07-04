<template>
  <div>
    <mt-cell style="position: fixed;top: 0; z-index: 1;">
      <img slot="icon" src="../../assets/img/头像1.png" height="36" width="36" alt="">
      <mt-search
          style="height: 52px; width: 80%;"
          v-model="searchValue"
          cancel-text="算了"
          placeholder="输入搜索"
      ></mt-search>
      <mt-button @click.native="typeClick" type="primary">分类</mt-button>
    </mt-cell>
    <mt-popup
        v-model="isShow"
        position="bottom"
        message="请选择分类"
    >
      <mt-checklist
          title="分类"
          v-model="types"
          :options="allTypes">
      </mt-checklist>
    </mt-popup>
    <router-view style="margin: 80px 0 55px 0;"></router-view>
    <mt-tabbar fixed v-model="navValue">
      <mt-tab-item id="main">
        <img slot="icon" src="../../assets/img/nav.png" alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="lesson">
        <img slot="icon" src="../../assets/img/nav.png" alt="">
        课程
      </mt-tab-item>
      <mt-tab-item id="article">
        <img slot="icon" src="../../assets/img/nav.png" alt="">
        文章
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../../assets/img/nav.png" alt="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: '',
        navValue: 'main',
        types: [],
        isShow: false,
        allTypes: [{label: '前端', value: '无'}, {label: '前端', value: '小学'}, {label: '前端', value: '初中'},
          {label: '后台', value: '高中'},]
      }
    },
    methods:{
      typeClick() {
        this.isShow = true
      }
    },
    watch: {
      navValue: function (value) {
        this.$router.replace(`/home/${value}`);
      }
    }
  }
</script>

<style>
  /*.mint-cell-value{*/
    /*position: relative;*/
  /*}*/
  .mint-button{
    /*position: absolute;*/
    /*right: 0;*/
    width: 80px;
  }
  .is-selected {
    background-color: #eaeaea;
    color: #26a2ff
  }
  .mint-popup{
    width: 100%;
  }
</style>