<template>
  <div>
    <div class="video">
      <video :src="videoUrl" width="100%" height="260px" controls="controls">
        视频出现错误，请重试
      </video>
    </div>
    <div class="block" style="margin-top: 50px;">
      <el-rate
          v-model="starValue"
          :colors="colors"
          :disabled="isChecked"
          show-score
          @change="getStar"
      >
      </el-rate>
    </div>
    <!--<x-button type="primary" text="asdas">lala</x-button>-->
    <el-collapse v-model="activeNames" v-for="item in vComments"  :key="item.id">
        <el-collapse-item :title="item.content" >
          <div v-for="comment in toComments" :key="comment.id" v-if="comment.toComment===item.id">{{comment.content}}</div>
          <el-button @click="">回复</el-button>
          <el-button type="text" @click="dialogVisible = true">回复</el-button>
          <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
            <el-input v-model="toSomeone" placeholder="请输入回复内容"></el-input>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addComment(item.id, item.user_name)">确 定</el-button>
  </span>
          </el-dialog>
        </el-collapse-item>
    </el-collapse>
    <div style="position: absolute; bottom: 0; width: 100%;">
      <el-input style="width: 75%;" v-model="toVideo" placeholder="请输入回复内容"></el-input>
      <el-button>回复</el-button>
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
        activeNames: ['1'],
        videoUrl: '',
        vComments: [],
        toComments: [],
        isChecked:false,
        starValue:null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        dialogVisible: false,
        toSomeone: '',
        toVideo: ''
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      getStar() {
        const url = `http://localhost:8080/video/star`;
        const id = this.$route.params.id;
        const star = this.starValue;
        axios.post(url, {id, star}).then(
          response => {
            const result = response.data;
            this.starValue = result.data.star;
            this.isChecked = true;
          }
        ).catch(error => {
          console.log('网络异常');
        })
      },
      addComment(id, toName) {
        const url = 'http://loaclhost:8080/video/addComment';
        const content = this.myComment.trim();
        axios.post(url, {id, toName, content}).then(
          response => {
            this.dialogVisible = false;
            const result = response.data;

          }
        )
      }
    },
    mounted() {
      const id = this.$route.params.id;
      const url = `http://localhost:8080/video/${id}`;
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
          this.videoUrl = result.data.url;
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