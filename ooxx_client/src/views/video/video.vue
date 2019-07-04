<template>
  <div>
    <div class="video">
      <video :src="videoUrl" width="100%" height="260px" controls="controls">
        视频出现错误，请重试
      </video>
    </div>
    <div class="star" style="margin-top: 50px;">
      <mt-range
          :v-model="score"
          :min="10"
          :max="90"
          :step="10"
          :bar-height="5">
        <div slot="start">0</div>
      </mt-range>
    </div>
    <x-button type="primary" text="asdas">lala</x-button>
    <ul class="comments">
      <li v-for="item in comments" :key="item.id">
        {{item.content}}---{{item.to}}---{{item.time}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import XButton from "vux/src/components/x-button/index";
  export default {
    components: {XButton},
    data() {
      return {
        videoUrl: '',
        comments: [],
        score: 0,
      }
    },
    mounted() {
      const id = this.$route.params.id;
      const url = `/video/${id}`;
      const response = {
        "code": 1,
        "data": {
          "id": 1,
          "name": "dasd",
          "info": "seed",
          "price": 1515,
          "imageUrl": "seedzy",
          "url": "dasd",
          "times": 151,
          "type": "sada",
          "score": 98,
          "comments": [{
            "id": "user_id-comment-id",
            "user_name": "sada",
            "content": "asd",
            "time": "2019-07-03 23:45",
            "to": "dewr"
          },
            {
              "id": "user_id-comment-id1",
              "user_name": "sada",
              "content": "asd",
              "time": "2019-07-03 23:45",
              "to": "dewr"
            },
            {
              "id": "user_id-comment-id2",
              "user_name": "sada",
              "content": "asd",
              "time": "2019-07-03 23:45",
              "to": "dewr"
            },
            {
              "id": "user_id-comment-id3",
              "user_name": "sada",
              "content": "asd",
              "time": "2019-07-03 23:45",
              "to": "dewr"
            }
          ]
        }
      };
      const result = response.data;
      this.videoUrl = result.url;
      this.comments = result.comments;
      this.score = result.score;
      // axios.get(url).then(
      //   response => {
      //     const result = response.data;
      //     this.videoUrl = result.url;
      //     this.comments = result.comments;
      //   }
      // ).catch(error => {
      //   console.log("出错啦");
      // })

    }
  }
</script>

<style>

</style>