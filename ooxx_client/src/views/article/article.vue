<template>
  <div>
    <el-card style="margin-bottom: 20px;" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
        <span style="float: right; padding: 3px 0">{{userName}}</span>
      </div>
      <div class="text item">
        {{question}}
      </div>
    </el-card>
    <el-divider></el-divider>
    <el-collapse style="margin-bottom: 45px;" v-model="activeNames" v-for="item in vComments"  :key="item.id">
      <el-collapse-item :title="item.info" >
        <div v-for="comment in toComments" :key="comment.id" v-if="comment.toAnswerId===item.id">{{comment.info}}</div>
        <el-input style="width: 75%;" v-model="toVideo" placeholder="请输入回复内容"></el-input>
        <el-button @click="addComment(item.id)">回复</el-button>
      </el-collapse-item>
    </el-collapse>
    <div style="position: absolute; bottom: 0; width: 100%;">
      <el-input style="width: 75%;" v-model="toVideo" placeholder="请输入回复内容"></el-input>
      <el-button @click="addVideoComment">回复</el-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Cookies from 'js-cookie'
  export default {
    data() {
      return {
        activeNames: ['1'],
        title:'',
        userName: '',
        question: '',
        vComments: [],
        toComments: [],
        isChecked:false,
        starValue:null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      }
    },
    methods: {
      addComment(toAnswerId) {
        const url = 'http://localhost:8080/qaa/addanswer';
        const info = this.toSomeone.trim();
        const userId = Cookies.get('account');
        const questionId = this.$route.params.id;
        axios.post(url, {toAnswerId, questionId,userId, info}).then(
          response => {
            const result = response.data;
            const i = result.answer.length + 1;
            this.toComments.push({id: i, info: info, toAnswerId: toAnswerId});
            this.toSomeone = ''
          }
        ).catch(error => {
          this.toSomeone = '';
          console.log('出错啦');
        })
      },
      addVideoComment() {
        const url = 'http://localhost:8080/qaa/addanswer';
        const info = this.toVideo.trim();
        const userId = Cookies.get('account');
        const questionId = this.$route.params.id;
        axios.post(url, {questionId,userId, info}).then(
          response => {
            const result = response.data;
            const i = result.answer.length + 1;
            this.toComments.push({id: i, info: info});
            this.toVideo = ''
          }
        ).catch(error => {
          this.toVideo = '';
          console.log('出错啦');
        })
      }
    },
    mounted() {
      const id = this.$route.params.id;
      const url = `http://localhost:8080/qaa/question/${id}`;
      axios.get(url).then(
        response => {
          const result = response.data;
          this.title = result.name;
          this.userName = result.fromUserName;
          this.question = result.info;
          const allComments = result.answer;
          this.vComments = allComments.filter(comment => comment.toAnswerId===null);
          // console.log(this.vComments);
          this.toComments = allComments.filter(comment => comment.toAnswerId!==null);
        }
      )
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