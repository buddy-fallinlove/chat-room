<template>
  <div>
    <div class="beijing">
  <div class="box">
  <div class="box1"></div>
  <div class="box2">
  <div class=""></div>
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
      value: "",
    };
  },
  methods: {
    send(e) {
      // 创建websocket
      let socket = new WebSocket("ws://echo.websocket.org");
      // open：当和websocket服务连接成功的时候触发
      console.log(e);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style>
.beijing {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/u=1096344923,2764059249&fm=26&gp=0.jpg");
  display: flex;
  position: absolute;
  background-size: 100% 100%;
}
.box {
  max-width: 1200px;
  min-width: 1000px;
  height: 100%;
  margin: 0 auto;
  background-color: pink;
}
.box1{
    width: 260px;
  height: 100%;
  float: left;
  position: relative;
  background-color: #2e3238;
}
.box2{
  overflow: hidden;
  height: 100%;
  background-color: #eee;
  position: relative;
}
.box2-hd {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 30px;
}
</style>