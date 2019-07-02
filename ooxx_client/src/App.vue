<template>
  <div id="app">
    <!--<Login/>-->
    <!--<Register/>-->
    <!--<Info/>-->
    <!--<router-link to="/register">Register</router-link>-->
    <!--<router-link to="/login">Login</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from './views/login/Login'
  import Register from './views/register/Register'
  import Info from './views/info/Info'
export default {
    components: {
      Login,
      Register,
      Info
    },
  name: 'App'
}
</script>

<style>

</style>
