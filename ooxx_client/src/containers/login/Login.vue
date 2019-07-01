<template>
  <div>
    <mt-header fixed title="OOXX教育"></mt-header>
    <Logo/>
    <mt-field label="账号" placeholder="请输入账号"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <mt-button @click.native="handleClick" type="primary">登录</mt-button>
    <mt-button type="primary">还未有账号</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import Logo from '../../components/logo/Logo'
  export default {
    components: {
      Logo
    },
    methods: {
      handleClick() {
        Toast('登录')
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