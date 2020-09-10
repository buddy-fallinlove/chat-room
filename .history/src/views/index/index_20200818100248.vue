<template>
  <div>
    <!-- 输入内容 -->
    <input type="text" placeholder="请输入" :value="value"/>
    <!-- 发送请求 -->
    <button @click="send">发送</button>
    <!-- 显示结果 -->
    <div class="box"></div>
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
      console.log(e)
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>