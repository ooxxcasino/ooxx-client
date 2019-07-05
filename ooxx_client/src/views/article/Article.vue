<template>
  <div>
    <el-card style="margin-bottom: 20px;" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
      </div>
      <div class="text item">
        {{question}}
      </div>
    </el-card>
    <el-collapse v-model="activeNames" v-for="item in vComments"  :key="item.id">
      <el-collapse-item :title="item.content" >
        <div v-for="comment in toComments" :key="comment.id" v-if="comment.toComment===item.id">{{comment.content}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import axios from 'axios'
  import XButton from "vux/src/components/x-button/index";
  export default {
    components: {XButton},
    data() {
      return {
        activeNames: ['1'],
        title:'',
        question: '',
        vComments: [],
        toComments: [],
        isChecked:false,
        starValue:null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      }
    },
    mounted() {
      const id = this.$route.params.id;
      const url = `http://localhost:8080/article/${id}`;
      axios.get(url).then(
        response => {
          // const response = {
          //   "code": 1,
          //   "data": {
          //     "id": 1,
          //     "name": "dasd",
          //     "info": "seed",
          //     "price": 1515,
          //     "imageUrl": "seedzy",
          //     "url": "dasd",
          //     "times": 151,
          //     "type": "sada",
          //     "comments": [{
          //       "id": "commentID1",
          //       "user_name": "sada",
          //       "content": "我是第一个，我是给视频的评论",
          //       "time": "2019-07-03 23:45",
          //       "toUser": "dewr",
          //       "toComment": ""
          //     },
          //       {
          //         "id": "commentID2",
          //         "user_name": "sada",
          //         "content": "我是第二个，我是给第一个评论的评论",
          //         "time": "2019-07-03 23:45",
          //         "toUser": "dewr",
          //         "toComment": "commentID1"
          //       },
          //       {
          //         "id": "commentID3",
          //         "user_name": "sada",
          //         "content": "我是第3个，我是给第一个评论的评论",
          //         "time": "2019-07-03 23:45",
          //         "toUser": "dewr",
          //         "toComment": "commentID1"
          //       },
          //       {
          //         "id": "commentID4",
          //         "user_name": "sada",
          //         "content": "我是第四个，我是给视频的评论",
          //         "time": "2019-07-03 23:45",
          //         "toUser": "dewr",
          //         "toComment": ""
          //       }
          //     ]
          //   }
          // }
          const result = response.data;
          this.question = result.data.question;
          this.title = result.data.title;
          const allComments = result.data.comments;
          // console.log(allComments);
          this.vComments = allComments.filter(comment => comment.toComment==='');
          // console.log(this.vComments);
          this.toComments = allComments.filter(comment => comment.toComment!=='');
          // console.log(this.toComments);

        }
      ).catch(error => {
        console.log("出错啦");
      })

    }
  }
</script>

<style>

</style>