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
        videoUrl: '',
        vComments: [],
        toComments: [],
        isChecked:false,
        starValue:null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      }
    },
    methods: {
      getStar() {
        const url = `http://localhost:8080/video/star`;
        const id = this.$route.params.id;
        const star = this.starValue;
        axios.get(url, {id, star}).then(
          response => {
            const result = response.data;
            this.starValue = result.data.star;
            this.isChecked = true;
          }
        ).catch(error => {
          console.log('网络异常');
        })
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