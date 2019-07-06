<template>
  <div style="">
    <el-container >
      <el-header>
        <el-page-header @back="goBack" content="个人中心" ></el-page-header></el-header>
      <el-main>
        <el-row :gutter="3">
          <el-col :span="5"> <router-link to="info"> <el-avatar icon="el-icon-user-solid"> </el-avatar></router-link></el-col>
          <el-col :span="7"><p>{{name}}</p></el-col>
          <el-col :span="3"><p>余额</p></el-col>
          <el-col :span="3"><p>{{money}}</p></el-col>
          <el-col :span="2"><el-button  @click="getmoney">充值</el-button></el-col>
        </el-row>

        <p style="text-align:center">我的收藏</p>
        <el-carousel :autoplay="false" :loop="false" type="card" height="150px" arrow="always" >
          <el-carousel-item v-for="myVideos in cdata" :key="myVideos.id"
                            is-link
                            :to="'/video/' + myVideos.id"
                            @click.native="play(myVideos.id)"
          >

            <img :src="myVideos.imageUrl" width="130" height="130">
          </el-carousel-item>
        </el-carousel>

        <p style="text-align:center">播放历史</p>
        <el-carousel  :autoplay="false" :loop="false" type="card" height="150px" arrow="always"	>
          <el-carousel-item v-for="myHistory in hdata" :key="myHistory.id"
                            is-link
                            :to="'/video/' + myHistory.id"
                            @click.native="play(myHistory.id)"
          >
            <!-- <el-button
                 :to="'/video/' + myHistory.id"
                @click.native="play(myHistory.id)"> -->
            <img :src="myHistory.imageUrl" width="130" height="130" >
            <!-- </el-button> -->
          </el-carousel-item>
        </el-carousel>
      </el-main>
      <el-footer> <el-button type="primary">退出登陆</el-button></el-footer>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import Cookies from 'js-cookie'
  export default {
    data(){
      return{
        name:'',
        money:null,
        cdata:null,
        hdata:null,
      }
    },
    methods: {
      goBack() {
        this.$router.push(`/home/mine`);
      },
      getmoney(){
        this.$router.push(`/mypage`);
      },
      play(id){
        this.$router.push(`/video/${id}`);
      }
    },
    mounted () {
      const account = Cookies.get('account');
      const url = `http://loaclhost:8080/user/${account}`;
      axios.get('url').then(
        response =>  {
          const result = response.data.user;
          this.name = result.account;
          this.money = result.money;
          this.cdata = result.myVideos;
          this.hdata = result.myHistory;
        }
      ).catch(error => {
        console.log("出错了");
      });
    }
  }
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    padding-left: 20px;
    line-height: 110px;
  }
  .el-main {
    background-color: #E9EEF3;
  }


</style>
