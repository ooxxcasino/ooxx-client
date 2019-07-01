// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Header, Field, Button} from  'mint-ui';
import App from './App'
import router from './router'

Vue.component(Header.name,Header);
Vue.component(Field.name,Field);
Vue.component(Button.name,Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
