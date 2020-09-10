<template>
  <div>
    <div class="beijing111" v-if="aso===0">
      <div class="box111">
        <div class="bt">用户登录</div>
        <div class="yhm">用户名</div>
        <input class="s-r-k" type="text" placeholder="请输入用户名" v-model="username" />
        <div class="yhm">选择头像</div>
        <div class="touxiang-box">
          <div v-for="(item,index) in list" :key="index" class="t-x">
            <img
              class="t-p"
              :src="item.name"
              alt
              :class="{'bor' : active === index}"
              @click="dianji(index,item)"
            />
          </div>
        </div>
        <div v-if="flag===true" class="s-b">登录失败，用户名重复</div>
        <button class="dl" @click="logins">登录</button>
      </div>
    </div>
    <div v-if="aso===1">
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
      aso: 0,
      active: 0,
      username: "",
      avatar: "",
      flag: false,
      list: [
        { name: require("../../src/assets/avatar01.jpg") },
        { name: require("../../src/assets/avatar02.jpg") },
        { name: require("../../src/assets/avatar03.jpg") },
        { name: require("../../src/assets/avatar04.jpg") },
        { name: require("../../src/assets/avatar05.jpg") },
        { name: require("../../src/assets/avatar06.jpg") },
        { name: require("../../src/assets/avatar07.jpg") },
        { name: require("../../src/assets/avatar08.jpg") },
        { name: require("../../src/assets/avatar09.jpg") },
        { name: require("../../src/assets/avatar10.jpg") },
      ],
    };
  },
  methods: {
    dianji(index, item) {
      this.active = index;
      this.avatar = item.name;
    },
    logins() {
      this.aso = 1;
      this.$socket.emit("login", {
        username: this.username,
        avatar: this.avatar,
      });
    },
  },

  sockets: {
    loginSuccess(data) {
      // console.log(data);
      alert("登录成功");
    },
    loginError(data) {
      console.log("登录失败", data);
    },
    userList(data) {
      console.log("获取用户列表", data);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.beijing {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/u=1096344923,2764059249&fm=26&gp=0.jpg");
  display: flex;
  position: absolute;
  background-size: 100% 100%;
}
.beijing111 {
  width: 100%;
  height: 100vh;
  background-image: url("../../src/assets/bg.jpg");
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
.box111 {
  width: 400px;
  height: 400px;
  background-color: white;
  margin: 100px auto;
}
.bt {
  width: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 70px;
}
.yhm {
  width: 300px;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 50px;
}
.s-r-k {
  width: 300px;
  height: 30px;
  font-size: 16px;
  margin-left: 50px;
  margin-top: 10px;
}
.touxiang-box {
  width: 300px;
  margin-left: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.dl {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  background-color: green;
  margin-top: 10px;
  color: white;
  text-align: center;
  line-height: 30px;
  margin-left: 50px;
}
.t-x {
  width: 50px;
  height: 40px;
  margin-left: 5px;
  margin-top: 5px;
}
.t-p {
  width: 50px;
  height: 45px;
}
.bor {
  border: 2px solid red;
}
.s-b {
  color: red;
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
</style>
