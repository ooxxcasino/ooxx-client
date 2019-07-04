<template>
  <div>
    <mt-header fixed title="个人信息完善"></mt-header>
    <mt-cell @click.native="headerClick" style="margin-top: 40px;" title="dd">
      <span>我的头像</span>
      <img slot="icon" :src="'../../assets/img/头像'+ header +'.png'" width="48" height="48" alt="">
    </mt-cell>
    <mt-field label="用户名" v-model="name" :state="nameState" placeholder="请输入您的用户名"></mt-field>
    <mt-radio
        title="性别"
        v-model="gender"
        :options="sexOptions">
    </mt-radio>
    <mt-field label="手机号" v-model="tel" :state="telState" placeholder="请输入您的手机号" type="tel"></mt-field>
    <mt-field label="邮箱" v-model="email" :state="emailState" placeholder="请输入您的邮箱"></mt-field>
    <mt-field label="生日" v-model="birthday" type="date"></mt-field>
    <!--<mt-cell :title="age"><span>我的年龄</span></mt-cell>-->
    <mt-field type="number" label="年龄" placeholder="请设置您的生日" :value="age" disabled></mt-field>
    <mt-field label="学历" v-model="education" disabled id="disable">
      <mt-button @click="educationClick">选择学历</mt-button>
    </mt-field>
    <mt-popup
      v-model="isShow"
      position="right"
      message="请选择学历"
    >
      <mt-radio
          title="学历"
          v-model="education"
          :options="educations">
      </mt-radio>
    </mt-popup>
    <mt-field label="个性签名" v-model="label" placeholder="请输入您的个性签名" rows="4" type="textarea"></mt-field>
    <mt-checklist
        align="right"
        title="选择您感兴趣的标签"
        v-model="type"
        :options="options">
    </mt-checklist>
    <mt-button type="primary">立即注册</mt-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        header: 1,
        name: '',
        tel: null,
        email: '',
        birthday: null,
        label: '',
        education: '无',
        isShow: false,
        educations: [{label: '无', value: '无'}, {label: '小学', value: '小学'}, {label: '中学', value: '中学'},
          {label: '大专', value: '大专'},{label: '本科', value: '本科'},
          {label: '研究生及以上', value: '研究生及以上'}],
        gender: 'female',
        sexOptions: [{label: '男', value: 'male'}, {label: '女', value: 'female'}],
        type: [],
        options: [{label: '前端开发', value: '1'}, {label: '前端开发', value: '2'}, {label: '前端开发', value: '3'},]
      }
    },
    computed: {
      age() {
        const bir = this.birthday;
        const date = Date.now();
        const nowYear = parseInt(date / (1000*60*60*24*365)) + 1970;
        // console.log(nowYear);
        if (bir) {
          // console.log(bir.slice(0, 4));
          return nowYear - bir.slice(0, 4);
        }
      },
      nameState() {
        const name = this.name.trim();
        if (name) {
          if (name.length > 3) {
            return 'success';
          } else {
            return 'error';
          }
        }
      },
      telState() {
        const tel = this.tel;
        if (tel){
          if (tel.length === 11) {
            return 'success';
          } else {
            return 'error';
          }
        }
      },
      emailState() {
        const email = this.email.trim();
        if (email) {
          if (email.indexOf('@') !== -1 && email.indexOf('.com') !== -1 && email.indexOf('@.com') === -1) {
            return 'success';
          } else {
            return 'error';
          }
        }
      }
    },
    methods: {
      educationClick() {
        this.isShow = true;
      },
      headerClick() {

      }
    }
  }
</script>

<style>
  .mint-field{
    margin: 5px 0;
  }
   .mint-button--primary{
     width: 100%;
     margin: 10px 0;
   }
  .mint-field-core {
    background-color: #fff;
  }
</style>