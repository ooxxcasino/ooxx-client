<template>
  <div>
    <mt-header fixed title="在线性教育"></mt-header>
    <Logo/>
    <mt-field label="账号" v-model="account" placeholder="请输入6位以上账号"></mt-field>
    <mt-field label="密码" v-model="pwd" placeholder="请输入8位以上密码" type="password"></mt-field>
    <mt-field label="确认密码" v-model="pwd2" placeholder="请再次输入密码" type="password"></mt-field>
    <mt-button @click.native="handleClick" type="primary">立即注册</mt-button>
    <mt-button type="primary" @click.native="toLogin">已有账号</mt-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import {Toast} from 'mint-ui'
  import Logo from '../../components/logo/Logo'
  export default {
    data() {
      return {
        account: '',
        pwd: '',
        pwd2: ''
      }
    },
    components: {
      Logo
    },
    methods: {
      handleClick() {
        const account = this.account.trim();
        const {pwd, pwd2} = this;
        if (account.length < 6) {
          return Toast('账号的长度不能小于6');
        }
        if (pwd.length < 8) {
          return Toast('密码长度不能小于8')
        }
        if (pwd !== pwd2) {
          return Toast('两次密码不一致')
        }
        const url = "http://localhost:8080/user/register";
        axios.post(url, {account,pwd}).then(
          response => {
            const result = response.data;
            if (response.code === 1) {
              this.$router.replace('/home')
            }
            if (response.code === 0) {
              Toast(result.info)
            }
          }
        ).catch(error => {
          Toast('网络异常')
        })
      },
      toLogin() {
        this.$router.replace('/login')
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