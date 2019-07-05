<template>
  <div>
      <mt-cell-swipe
          v-for="(item, index) in list"
          :label="item.price.toString()"
          :title="item.name"
          :value="item.type"
          :key="index"
          is-link
          :to="'/video/' + item.id"
          @click.native="handleClick(item.id)"
      >
        <img slot="icon" src="../../assets/img/nav.png" width="48" height="48" alt="">
      </mt-cell-swipe>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loading: false,
        list: []
      }
    },
    methods:{
      handleClick(id) {
        this.$router.push(`/video/${id}`)
      }
    },
    mounted() {
        const url = 'http://localhost:8080/video/list';
        axios.get(url).then(
          response => {
            const result = response.data;
            if (result.code === 1) {
              this.list = result.data;
            } else {
              console.log(result.data.info)
            }
          }
        )
    }
  }
</script>

<style>
  .mint-cell-wrapper{
    height: 100px;
  }
  .mint-cell-title {
    margin-right: 10px;
  }
  .mint-cell-text {
    margin-left: 10px;
  }
</style>