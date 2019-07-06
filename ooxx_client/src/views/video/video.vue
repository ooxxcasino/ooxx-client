<template>
  <div>
    <div class="video">
      <video :src="videoUrl" width="100%" height="260px" controls="controls">
        视频出现错误，请重试
      </video>
      {{videoName}} <el-button @click="addLesson">{{isAdd ? "已添加" : "添加课程"}}</el-button>
      <br>
      {{videoInfo}}
    </div>
    <el-divider></el-divider>
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
    <el-collapse style="margin-bottom: 45px;" v-model="activeNames" v-for="item in vComments"  :key="item.id">
        <el-collapse-item :title="item.user_name + '评论说：' + item.content" >
          <div v-for="comment in toComments" :key="comment.id" v-if="comment.toComment===item.id">{{comment.user_name}}回复说：{{comment.content}}</div>
          <el-input style="width: 75%;" v-model="toVideo" placeholder="请输入回复内容"></el-input>
          <el-button @click="addComment(item.id)">回复</el-button>
        </el-collapse-item>
    </el-collapse>
    <div style="position: absolute; bottom: 0; width: 100%;">
      <el-input style="width: 75%;" v-model="toVideo" placeholder="请输入评论内容"></el-input>
      <el-button @click="addVideoComment">评论</el-button>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
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
        toVideo: '',
        videoName: '',
        videoInfo: '',
        isAdd: false
      }
    },
    methods: {
      addLesson() {
        const userAccount = Cookies.get('account');
        const videoId = this.$route.params.id;
        const url = `http://localhost:8080/user/video`;
        if (!this.isAdd) {
          axios.post(url, {userAccount, videoId}).then(
            response => {
              const result = response.data;
              if (result.code === 1) {
                this.isAdd = true;
              }
            }
          ).catch(error => {
            console.log("出错啦");
          })
        }else {
          axios.delete(url, {userAccount, videoId}).then(
            response => {
              this.isAdd = false;
            }
          ).catch(error => {
            console.log("出错啦");
          })
        }

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
      addComment(commentId) {
        const url = 'http://loaclhost:8080/video/addComment';
        const content = this.toSomeone.trim();
        const toUserAccount = Cookies.get('account');
        const videoId = this.$route.params.id;
        axios.post(url, {commentId, videoId,toUserAccount, content}).then(
          response => {
            this.dialogVisible = false;
            const result = response.data;
            let i = parseInt(math.random() * 10);
            this.toComments.push({id: i, content: this.toSomeone, toCommentId: toCommentId});
          }
        ).catch(error => {
          console.log('出错啦');
        })
      },
      addVideoComment() {
        const url = 'http://loaclhost:8080/video/addComment';
        const content = this.toVideo.trim();
        const userAccount = Cookies.get('account');
        const videoId = this.$route.params.id;
        axios.post(url, {videoId, userAccount, content}).then(
          response => {
            const result = response.data;
            // let i = parseInt(math.random() * 10);
            // this.vComments.push({id: i, content: this.toVideo, ...});
            this.toVideo = '';
          }
        ).catch(error => {
          console.log('出错啦');
        })
      }
    },
    mounted() {
      const id = this.$route.params.id;
      const url = `http://localhost:8080/video/${id}`;
      const account = Cookies.get('account');
      const userUrl = `http://localhost:8080/user/video?account=${account}`;
      axios.get(userUrl).then(
        response => {
          const result = response.data;
          const videoList = result.data;
          const video = videoList.find(value => value.id===id);
          if (video) {
            this.isAdd = true;
          }
        }
      ).catch(error => {
        console.log("出错啦");
      });
      axios.get(url).then(
        response => {
          const result = response.data;
          this.videoUrl = result.data.url;
          const allComments = result.data.videoComments;
          this.videoName = result.data.name;
          this.videoInfo = result.data.info.substr(0,30) + '...';
      // console.log(allComments);
          this.vComments = allComments.filter(comment => comment.toCommentId===null);
          // console.log(this.vComments);
          this.toComments = allComments.filter(comment => comment.toCommentId!==null);
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