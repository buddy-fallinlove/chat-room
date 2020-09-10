<template>
  <div>
    <div class="beijing" v-if="toi===0">
      <div class="box">
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
        <div class="beijing" v-if="toi===1">
      <div class="box">
        <div class="box1">
          <div class="header">
            <div class="avatar">
              <img class="img avatar_url" :src="obj.avatar" alt />
            </div>
            <div class="info">
              <h3 class="username">{{obj.username}}</h3>
            </div>
          </div>
          <div class="title">
            <h3>用户列表</h3>
          </div>
        </div>
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
                <span class="content">加入了群聊</span>
              </p>
            </div>
          </div>
          <div class="box-ft">
            <div class="toolbar">
              <a href="javascript:;" title="表情" class="face">
                <img src="../../assets/笑脸.png" alt class="ytr" />
              </a>
              <a href="javascript:;" title="截屏" class="screen-cut">
                <img src="../../assets/剪刀.png" alt class="ytr" />
              </a>
              <a href="javascript:;" title="图片" class="file">
                <img src="../../assets/文件夹.png" alt class="ytr" />
                <label for="file"></label>
                <input type="file" placeholder="请输入用户名" id="file" style="display: none;" />
              </a>
            </div>
            <!-- 内容输入区域 -->
            <div class="content">
              <!-- div添加一个属性：contenteditable -->
              <div class="text" id="content" contenteditable></div>
            </div>
            <!-- 发送按钮 -->
            <div class="action">
              <span class="desc">按下Ctrl+Enter发送</span>
              <a class="btn-send" id="btn-send" href="javascript:;">发送</a>
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
      active: 0,
      username: "",
      avatar: "",
      flag: false,
      toi:0,
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
      
this.toi=1
      this.$socket.emit("login", {
        username: this.username,
        avatar: this.avatar,
      });
    },
  },

  sockets: {
    loginSuccess(data) {
      console.log(data);
      alert("登录成功");
      this.$router.push({
        path: "/index",
        query: { username: data.username, avatar: data.avatar },
      });
    },
    loginError(data) {
      console.log("登录失败", data);
      // this.flag=true
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
  background-image: url("../../src/assets/bg.jpg");
  display: flex;
  position: absolute;
  background-size:100% 100%;
}
.box {
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
