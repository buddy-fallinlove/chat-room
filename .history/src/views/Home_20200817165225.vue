import '../../server/public/lib/jquery-emoji/css/index.css';
<template>
 <div>
<div v-for="item , index in imgList" :key="index">
<div>
<img :src="item.name" alt="" class="image">
</div>
</div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
imgList: [{
          name: require('../assets/avatar01.jpg')
        },
        {
          name: require('../assets/avatar02.jpg')
        },
        {
          name: require('../assets/avatar03.jpg')
        },
        {
          name: require('../assets/avatar04.jpg')
        },
        {
          name: require('../assets/avatar05.jpg')
        },
        {
          name: require('../assets/avatar06.jpg')
        },
        {
          name: require('../assets/avatar07.jpg')
        },
        {
          name: require('../assets/avatar08.jpg')
        },
        {
          name: require('../assets/avatar09.jpg')
        },
        {
          name: require('../assets/avatar10.jpg')
        },
      ],

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.image{
  width: 100px;
  height: 100px;
}
</style>