// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import MinUI from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'

import App from './App'
import router from './router'

Vue.use(MinUI);
Vue.use(ElementUI);
// Vue.component('x-button', XButton)
// Vue.component(Rate.name, Rate);
// Vue.component(Collapse.name, Collapse);
// Vue.component(CollapseItem.name, CollapseItem);
// Vue.component(Card.name, Card );
// Vue.component(Form.name, Form  );
// Vue.component(Select.name, Select  );
// Vue.component(FormItem.name, FormItem  );
// Vue.component(DatePicker.name, DatePicker  );
// Vue.component(CheckboxGroup.name, CheckboxGroup  );
// Vue.component(Col.name, Col  );
// Vue.component(Button.name, Button  );
// Vue.component(Input.name, Input  );
// Vue.component(Switch.name, Switch  );
// Vue.component(Checkbox.name, Checkbox  );
// Vue.component(Radio.name, Radio  );
// Vue.component(Option.name, Option  );
// Vue.component(TimePicker.name, TimePicker  );
// Vue.component(RadioGroup.name, RadioGroup  );
// Vue.component(Dialog.name, Dialog  );
// Vue.component(Divider.name, Divider  );
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
