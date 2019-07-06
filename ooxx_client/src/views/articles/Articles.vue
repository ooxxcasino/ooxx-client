<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <span>{{item.name}}</span> --- <span>{{item.fromUserName}}</span> --- <span>{{item.time}}</span>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import XButton from "vux/src/components/x-button/index";
  export default {
    components: {XButton},
    data() {
      return {
        list:[]
      }
    },
    mounted() {
      const url = `http://localhost:8080/qaa/allquestion`;
      axios.get(url).then(
        response => {
          const result = response.data;
          this.list = result.data;
        }
      ).catch(error => {
        console.log("出错啦");
      })

    }
  }
</script>

<style>

</style>