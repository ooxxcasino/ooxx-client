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
  export default {
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
      const url = `http://loaclhost:8080/article/${id}`;
      axios.get(url).then(
        response => {
          const result = response.data;
        }
      )
    }
  }
</script>

<style>

</style>