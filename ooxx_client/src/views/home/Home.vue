<template>
  <div>
    <mt-cell v-if="!isMine" style="position: fixed;top: 0; z-index: 1;">
      <img slot="icon" src="../../assets/img/头像1.png" height="36" width="36" alt="">
      <mt-search
          style="height: 52px; width: 80%;"
          v-model="searchValue"
          cancel-text="算了"
          placeholder="输入搜索"
      ></mt-search>
      <mt-button @click.native="typeClick" v-if="isMain" type="primary">分类</mt-button>
      <mt-button @click.native="questionClick" v-if="isArticle" type="primary">提问</mt-button>
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
      <mt-tab-item id="articles">
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
        isMine: false,
        isMain: false,
        isArticle:false,
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
      },
      questionClick() {
        this.$router.replace('/question')
      }
    },
    mounted() {
      if (this.pathValue === 'articles') {
        this.isArticle = true;
        this.navValue = 'articles';
      }
      if (this.pathValue === 'main') {
        this.isMain = true;
        this.navValue = 'main';
      }
      if (this.pathValue === 'mine') {
        this.isMine = true;
        this.navValue = 'mine';
      }
    },
    computed: {
      pathValue() {
        const pathArr = this.$route.fullPath.split('/');
        return pathArr[pathArr.length-1];
      }
    },
    watch: {
      navValue: function (value) {
        this.$router.replace(`/home/${value}`);
        this.isMine = value === 'mine';
        this.isMain = value === 'main';
        this.isArticle = value === 'articles';
      },
      pathValue: function (value) {
        if (value === 'articles') {
          this.isArticle = true;
          this.navValue = 'articles'
        }
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