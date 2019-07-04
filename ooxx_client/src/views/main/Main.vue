<template>
  <div>

      <mt-cell-swipe
          v-for="(item, index) in list"
          :label="item.price.toString()"
          :title="item.name"
          :value="item.type"
          :key="index"
          is-link
          :to="'/video/' + item.id"
          icon="123"
      >
        <img slot="icon" src="../../assets/img/nav.png" width="48" height="48" alt="">
      </mt-cell-swipe>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loading: false,
        list: [{
          "id": 1,
          "name": "dasd",
          "info": "打算的撒多",
          "price": 1515,
          "imageUrl": "../../assets/img/头像1.png",
          "url": "dasd",
          "times": 151,
          "type": "sada"
        },
          {
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },
          {
            "id": 3,
            "name": "fhhs",
            "info": "asfasfs",
            "price": 12155,
            "imageUrl": "asfasf",
            "url": "sdfsdfs",
            "times": 4886,
            "type": "fsfsfs"
          },
          {
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },{
            "id": 2,
            "name": "asfa",
            "info": "gsg",
            "price": 121,
            "imageUrl": "das",
            "url": "fsafa",
            "times": 1333,
            "type": "sfas"
          },]
      }
    },
    methods:{
      // loadMore() {
      //   this.loading = true;
      //   setTimeout(() => {
      //     let last = this.list[this.list.length - 1];
      //     for (let i = 1; i <= 10; i++) {
      //       this.list.push(last + i);
      //     }
      //     this.loading = false;
      //   }, 2500);
      // }
    },
    // mounted() {
    //     const url = '/main';
    //     axios.get(url).then(
    //       resposnse => {
    //         const result = resposnse.data;
    //         this.list = result;
    //       }
    //     )
    // }
  }
</script>

<style>
  .mint-cell-wrapper{
    height: 100px;
  }
  .mint-cell-title {
    margin-right: 10px;
  }
  .mint-cell-text {
    margin-left: 10px;
  }
</style>