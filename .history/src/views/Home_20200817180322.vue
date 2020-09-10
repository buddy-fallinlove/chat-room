<template>
  <div class="container-login">
    <div class="back">
      <div class="box">用户登录</div>
      <div class="box2">用户名</div>
      <div >
        <input type="text" class="box1"/>
      </div>
    </div>
    <!--<div v-for="(item,index) in imgList" :key="index">
      <div>
        <img :src="item.name" class="image" />
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      imgList: [
        {
          name: require("../assets/avatar01.jpg"),
        },
        {
          name: require("../assets/avatar02.jpg"),
        },
        {
          name: require("../assets/avatar03.jpg"),
        },
        {
          name: require("../assets/avatar04.jpg"),
        },
        {
          name: require("../assets/avatar05.jpg"),
        },
        {
          name: require("../assets/avatar06.jpg"),
        },
        {
          name: require("../assets/avatar07.jpg"),
        },
        {
          name: require("../assets/avatar08.jpg"),
        },
        {
          name: require("../assets/avatar09.jpg"),
        },
        {
          name: require("../assets/avatar10.jpg"),
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.container-login {
  background: url("../assets//u=1096344923,2764059249&fm=26&gp=0.jpg");
  width: 100%;
  height: 100vh;
  position: fixed;
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 500px;
  height: 500px;
  background: rgba($color: #000000, $alpha: 0.5);
  border-radius: 5px;
}
.box {
  position: absolute;
  font-size: 30px;
  flex-wrap: 500;
  top: 30px;
}
.box1{
  width: 500px;
  margin-top:150px;
}
.image {
  width: 40px;
  height: 40px;
}
</style>