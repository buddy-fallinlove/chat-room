<template>
  <div>
    <div class="beijing">
  <div class="box">
  
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
  max-width: 1000px;
  min-width: 800px;
  height: 100%;
  margin: 0 auto;
  background-color: pink;
}
.box1{
    width: 280px;
  height: 100%;
  float: left;
  position: relative;
  background-color: #2e3238;
}
</style>