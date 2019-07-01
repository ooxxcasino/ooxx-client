<template>
  <div id="app">
    <!--<Login/>-->
    <Register/>
  </div>
</template>

<script>
  import Login from './containers/login/Login'
  import Register from './containers/register/Register'
export default {
    components: {
      Login,
      Register
    },
  name: 'App'
}
</script>

<style>

</style>
