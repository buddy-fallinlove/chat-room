<template>
  <div>
<img src="../assets/tupian11.jpg" alt class="wei" />
    <div class="mr">
      <div class="ms">
        <div class="gao">
          <div class="gaos">
            <img :src="obj.imges" alt class="imgs" />
            <div class="mlxg">{{obj.username}}</div>
          </div>
          <div class="hu">用户列表</div>
          <div v-for="(item,index) in list" :key="index" class="item-a">
            <div class="d-f">
              <img :src="item.imges" alt class="imgs" />
              <div class="m-l1 m-t1">{{item.username}}</div>
            </div>
          </div>
        </div>
        <div class="chang">
          <div class="kuan">聊天室({{list.length}})</div>
          <div class="tian" id="scrolldIV">
            <div v-for="(item1,index1) in arr" :key="index1">
              <div v-if="item1.join" class="m-t1 eler">{{item1.join}}</div>
              <div v-else-if="item1.out" class="m-t1 eler">{{item1.out}}</div>
              <div v-else>
                <div class="m-t1 eler">{{item1.times}}</div>
                <div v-if="item1.username === obj.username">
                  <div class="d-f user">
                    <div v-if="item1.img">
                      <img :src="item1.img" alt class="images" />
                    </div>
                    <div v-else style="max-width:500px">
                      <div class="pian">{{item1.msg}}</div>
                    </div>
                    <div>
                      <div>{{item1.username}}</div>
                      <img :src="item1.imges" alt class="imgs" />
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="d-f var">
                    <div>
                      <div>{{item1.username}}</div>
                      <img :src="item1.imges" alt class="imgs" />
                    </div>
                    <div v-if="item1.img">
                      <img :src="item1.img" alt class="images" />
                    </div>
                    <div v-else style="max-width:500px">
                      <div class="pian">{{item1.msg}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="jue" v-if="flag===true">
            <picker @select="addEmoji" />
          </div>
          <div class="shi">
            <img class="tu" src="../assets/xiaolian.png" alt @click="clickitem" />
            <img class="tu" src="../assets/jiandao.png" alt />
            <img class="tu" src="../assets/wenjian.png" alt />
            <input type="file" ref="file" @change="onchange" />
          </div>
          <div>
            <div
              class="content"
              contenteditable="true"
              ref="content"
              @keydown.enter.prevent="sendMessage"
            ></div>
          </div>
          <div class="row">
            <div>按下Ctrl+Enter发送</div>
            <div class="fa" @click="sendMessage">发送</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import dayjs from "dayjs";
import { Picker } from "emoji-mart-vue";
export default {
  name: "",
  props: {},
  components: { Picker },
  data() {
    return {
      obj: {},
      list: [],
      add: {},
      arr: [],
      num: "",
      flag: false,
      app: {},
    };
  },
  methods: {
    // 点击选中表情
    addEmoji(e) {
      // console.log(e);
      this.$refs.content.innerHTML += e.native;
    },
    // 点击表情包显示与隐藏
    clickitem() {
      this.flag = !this.flag;
    },
    // 点击发送消息
    sendMessage() {
      // console.log(this.$socket)
      let values = this.$refs.content.innerHTML;
      this.$socket.emit("sendMessage", {
        username: this.obj.username,
        imges: this.obj.imges,
        msg: values,
      });
      this.$refs.content.innerHTML = "";
    },
  },
  // 接收服务端的消息
  sockets: {
    // 用户下线
    delUser(data) {
      console.log(data);
      let map = {};
      map.out = `“${data.username}”离开了群聊`;
      this.arr.push(map);
    },
    // 获取所有消息
    receiveMessage(data) {
      let time = dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss");
      data.times = time;
      // console.log(data)
      this.add = data;
      this.arr.push(this.add);
      console.log(this.arr);
    },
    //  获取用户列表
    userList(data) {
      // this.num = data.length
      if (data.length > this.list.length) {
        let map = {};
        map.join = `“${data[data.length - 1].username}”加入了群聊`;
        this.arr.push(map);
      }
      // console.log("获取用户列表", data);
      this.list = data;
      // console.log(this.list);
    },
  },
  mounted() {
    this.obj = this.$route.query;
    // console.log(this.obj)
  },
  watch: {
     arr() {
      let obj = document.getElementById("scrolldIV");
      this.$nextTick(() => {
        obj.scrollTop = obj.scrollHeight;
      });
    },
  },
  computed: {},
};
</script>

<style scoped lang='scss'>
.wei {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}
.mr {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ms {
  width: 900px;
  height: 700px;
  background: rgb(255, 255, 255);
  display: flex;
}
.gao {
  width: 250px;
  height: 700px;
  background: #555;
}
.gaos {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgs {
  width: 50px;
  height: 50px;
}
.mlxg {
  color: white;
  font-size: 24px;
  margin-left: 15px;
}
.item-a {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: white;
}
.hu {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: white;
}
.chang {
  width: 650px;
  height: 700px;
}
.kuan {
  width: 90%;
  height: 80px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  font-size: 24px;
}
.tian {
  width: 100%;
  height: 400px;
  border-bottom: 1px solid #ccc;
  overflow-y: auto;
}
.eler {
  text-align: center;
}
.shi {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.tu {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
.row {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.fa {
  width: 75px;
  height: 25px;
  border: 1px solid #ccc;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user {
  justify-content: flex-end;
  margin-top: 20px;
}
.var {
  margin-top: 20px;
}
.content {
  width: 80%;
  height: 80px;
  margin-left: 20px;
  outline: none;
  resize: none;
  border: none;
}
.pian {
  height: 20px;
  padding: 10px;
  background: green;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.jue {
  position: absolute;
  bottom: 100px;
  right: 0;
}
</style>
