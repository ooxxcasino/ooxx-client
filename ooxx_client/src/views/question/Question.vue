<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="问题标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="问题描述">
      <el-input type="textarea" v-model="form.info"></el-input>
    </el-form-item>
    <el-form-item label="问题分类">
      <el-select v-model="form.type" placeholder="请选择问题的主要分类">
        <el-option label="c" value="c"></el-option>
        <el-option label="java" value="java"></el-option>
        <el-option label="js" value="js"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="匿名提问">
      <el-switch v-model="form.anonymity"></el-switch>
    </el-form-item>
    <el-form-item label="付费置顶">
      <el-radio-group v-model="form.pay">
        <el-radio label="是"></el-radio>
        <el-radio label="否"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          title: '',
          anonymity: false,
          type: '',
          pay: '否',
          info:''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$router.replace('/home/article')
        // const url = 'http://localhost:8080/question';
        // const {title, anonymity, type, pay, info} = this;
        // const time = Date.now();
        // axios.post(url, {title, anonymity, type, pay, info, time}).then(
        //   response => {
        //     const result = response.data;
        //     if (result.code === 1) {
        //       setTimeout(function () {
        //         Toast('创建成功');
        //         this.$router.replace('/home/article')
        //       })
        //     }
        //   }
        // )
      },
      onCancel() {
        this.$router.replace('/home/article')
      }
    }
  }
</script>

<style>

</style>