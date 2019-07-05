<template>
  <div>
    <mt-header fixed title="在线性教育"></mt-header>
    <Logo/>
    <mt-field label="账号" v-model="account" placeholder="请输入账号"></mt-field>
    <mt-field label="密码" v-model="pwd" placeholder="请输入密码" type="password"></mt-field>
    <mt-button @click.native="handleClick" type="primary">登录</mt-button>
    <mt-button @click.native="toRegister" type="primary">还未有账号</mt-button>
  </div>
</template>

<script>
  import axios from 'axios';
  import {Toast} from 'mint-ui'
  import Logo from '../../components/logo/Logo'
  export default {
    data() {
      return {
        account: '',
        pwd: ''
      }
    },
    components: {
      Logo
    },
    methods: {
      handleClick() {
        const {account, pwd} = this;
        if (!account || !pwd) {
          return Toast('账号密码不能为空')
        }
        // 使用 axios 发送 ajax 请求
        const url = `http://localhost:8080/user/login`;
        axios.post(url, {account, pwd}).then(
          response => {
            const result = response.data;
            if (result.code === 1) {
              this.$router.replace('/home');
            }else {
              Toast(result.data.info);
            }
          }
        ).catch(error => {
          Toast('网络异常')
        });
      },
      toRegister() {
        // Toast(this.$route.fullPath
        // window.location = 'http://localhost:8022/register#/register'
        this.$router.replace('/register')
      }
    }
  }
</script>

<style>
 .mint-button{
   width: 100%;
   margin: 10px 0;
 }
</style>