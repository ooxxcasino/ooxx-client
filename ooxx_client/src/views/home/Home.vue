<template>
  <div>
    <mt-cell
    >
      <img slot="icon" src="../../assets/img/头像1.png" height="36" width="36" alt="">
      <mt-search
          style="height: 52px; width: 80%;"
          v-model="searchValue"
          cancel-text="算了"
          placeholder="输入搜索"
      ></mt-search>
      <mt-button icon="more" type="primary"></mt-button>
    </mt-cell>
    <router-view></router-view>
    <mt-tabbar>
      <mt-tab-item id="首页">
        首页
      </mt-tab-item>
      <mt-tab-item id="课程">
        课程
      </mt-tab-item>
      <mt-tab-item id="文章">
        文章
      </mt-tab-item>
      <mt-tab-item id="我的">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: ''
      }
    }
  }
</script>

<style>
  .mint-cell-value{
    position: relative;
  }
  .mint-button--primary{
    position: absolute;
    right: 0;
  }
</style>