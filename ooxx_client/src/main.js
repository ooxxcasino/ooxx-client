// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MinUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import {XButton} from 'vux'
import {
  Rate,
  Collapse,
  CollapseItem,
  Card
} from 'element-ui'
import App from './App'
import router from './router'

Vue.use(MinUI);
// Vue.component('x-button', XButton)
Vue.component(Rate.name, Rate);
Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);
Vue.component(Card .name, Card );
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
