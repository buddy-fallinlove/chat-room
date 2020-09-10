<template>
  <div>
    <div class="beijing">
      <div class="box">
        <div class="box1"></div>
        <div class="box2">
          <div class="box2-hd">
            <h3>
              聊天室(
              <span id="userCount">99</span>)
            </h3>
          </div>
          <div class="box-bd">
            <div class="system">
                    <p class="message_system">
              <span class="content">"往事随风"邀请你和"Boy"加入了群聊</span>
            </p>
            </div>
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
      sockets: {
        userList(data) {
      console.log("获取用户列表", data);
    },
    },
  mounted() {

  },

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
.box1 {
  width: 260px;
  height: 100%;
  float: left;
  position: relative;
  background-color: #2e3238;
}
.box2 {
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
.box2-hd h3 {
  font-size: 18px;
  font-weight: 400;
  padding: 10px 0;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  z-index: 999;
  box-sizing: border-box;
}
.box-bd {
  position: absolute;
  width: 100%;
  bottom: 180px;
  top: 51px;
  overflow-y: auto;
  overflow-x: hidden;
}
.system {
  overflow: hidden;
}
.message_system {
  text-align: center;
  margin: 10px auto;
  max-width: 50%;
}

.message_system .content {
  display: inline-block;
  font-size: 12px;
  padding: 1px 18px;
  color: #b2b2b2;
  border-radius: 2px;
}
</style>