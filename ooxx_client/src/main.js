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
  Card,
  Form,
  Select,
  FormItem,
  DatePicker,
  CheckboxGroup,
  Col,
  Button,
  Input,
  Switch,
  Checkbox,
  Radio,
  Option,
  TimePicker,
  RadioGroup,
  Dialog
} from 'element-ui'
import App from './App'
import router from './router'

Vue.use(MinUI);
// Vue.component('x-button', XButton)
Vue.component(Rate.name, Rate);
Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);
Vue.component(Card.name, Card );
Vue.component(Form.name, Form  );
Vue.component(Select.name, Select  );
Vue.component(FormItem.name, FormItem  );
Vue.component(DatePicker.name, DatePicker  );
Vue.component(CheckboxGroup.name, CheckboxGroup  );
Vue.component(Col.name, Col  );
Vue.component(Button.name, Button  );
Vue.component(Input.name, Input  );
Vue.component(Switch.name, Switch  );
Vue.component(Checkbox.name, Checkbox  );
Vue.component(Radio.name, Radio  );
Vue.component(Option.name, Option  );
Vue.component(TimePicker.name, TimePicker  );
Vue.component(RadioGroup.name, RadioGroup  );
Vue.component(Dialog.name, Dialog  );
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
