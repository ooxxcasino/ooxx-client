<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{item.name}}</span>
          <span style="float: right; padding: 3px 0">{{item.fromUserName}}</span>
        </div>
        <div class="text item">
          {{item.info}}<br>
          {{item.time.substr(0,10)}}
        </div>
      </el-card>
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
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>