<template>
  <div class="container-login">
    <div class="back">
      <div class="box">用户登录</div>
      <div class="box1">*用户名</div>
      <input type="text" class="box2" />
      <div class="box3">选择头像</div>
      <div class="box4">
       <div v-for="(item,index) in imgList" :key="index">
        <div>
          <img :src="item.name" class="image" />
        </div>
      </div>
      </div>
     
    </div>
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
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
.back {
  display: flex;
  width: 500px;
  height: 500px;
  background: rgba($color: #000000, $alpha: 0.5);
  border-radius: 5px;
  position: relative;
}
.box {
  display: flex;
  margin-left: 180px;
  font-size: 30px;
  flex-wrap: 500;
  position: absolute;
  top: 25px;
  height: 50px;
}
.box1 {
  top: 90px;
  color: aliceblue;
  position: absolute;
  left: 110px;
}
.box2 {
  position: absolute;
  height: 30px;
  width: 260px;
  top: 120px;
  left: 100px;
}
.box3 {
  top: 180px;
  color: aliceblue;
  position: absolute;
  left: 110px;
}
.box4{
  width: 00px;
  height: 00px;
}
.image {
  width: 40px;
  height: 40px;
}
</style>