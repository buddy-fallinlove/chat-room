<template>
  <div>
    <div class="beijing">
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
      value: "",
      obj: {},
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
      console.log('获取用户列表',data);
    },
    // receiveMessage(data){
    //   console.log(data)
    // }
  },
  mounted() {
    this.obj = this.$route.query;
    console.log(this.obj);
  },

  watch: {},
  computed: {},
};
</script>

<style>
.title {
  padding: 13px 18px 11px;
  border-bottom: 1px solid #24272c;
  border-top: 1px solid #24272c;
  color: #fff;
}

.title h3 {
  font-weight: 400;
  font-size: 18px;
}
.header .info {
  display: table-cell;
  vertical-align: middle;
  word-wrap: break-word;
  word-break: break-all;
  width: 2000px;
}

.header .info h3 {
  display: inline-block;
  font-weight: 400;
  width: 156px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: #fff;
  font-size: 18px;
  vertical-align: top;
  line-height: 31px;
  text-decoration: none;
}
.header .avatar {
  display: table-cell;
  vertical-align: middle;
  word-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
  padding-right: 10.625px;
}

.header .avatar .img {
  width: 40px;
  height: 40px;
  border-radius: 2px;
  display: block;
  cursor: pointer;
}
.header {
  padding: 18px;
  position: relative;
}
.ytr {
  width: 25px;
  height: 25px;
}
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
.box-ft {
  border-top: 1px solid #ccc;
  position: absolute;
  height: 180px;
  bottom: 0;
  right: 0;
  left: 0;
}
.box-ft .toolbar {
  height: 30px;
  padding: 5px 20px;
}
.box-ft .toolbar .face {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}
.box-ft .toolbar .screen-cut {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}
.box-ft .toolbar .file label {
  opacity: 0;
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  background: rgb(255, 255, 255);
}

.box-ft .toolbar .file {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}
.box-ft .content {
  height: 90px;
  overflow-x: hidden;
  padding: 0px 20px;
}

.box-ft .content .text {
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 84px;
  font-size: 16px;
  background-color: #eee;
}

.box-ft .action {
  text-align: right;
  margin-top: 5px;
  padding-right: 20px;
}

.box-ft .action .desc {
  color: #888;
  font-size: 12px;
  margin-left: 10px;
  margin-right: 7px;
}
.btn-send {
  display: inline-block;
  border: 1px solid #c1c1c1;
  text-decoration: none;
  background-color: #fff;
  color: #222;
  border-radius: 4px;
  padding: 3px 30px;
  font-size: 14px;
}

.btn-send:hover {
  background-color: #d8d8d8;
}
</style>