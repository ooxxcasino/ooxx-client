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
      <img slot="icon" :src="item.imageUrl"  width="48" height="48" alt="">
    </mt-cell-swipe>
  </div>
</template>

<script>
  import axios from 'axios'
  import Cookies from 'js-cookie'

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
      // const url = 'http://localhost:8080/video/list';
      const account = Cookies.get('account');
      const userUrl = `http://localhost:8080/user/video?account=${account}`;
      axios.get(userUrl).then(
        response => {
          const result = response.data;
          this.list = result.data;
        }
      ).catch(error => {
        console.log("出错啦");
      });
      // axios.get(url).then(
      //   response => {
      //     const result = response.data;
      //     if (result.code === 1) {
      //       this.list = result.data;
      //     } else {
      //       console.log(result.data.info)
      //     }
      //   }
      // )
    }
  }
</script>

<style>

</style>