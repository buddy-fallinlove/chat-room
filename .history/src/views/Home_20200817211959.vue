<template>
  <div>
    <div>
      <img
        src="../assets/u=1096344923,2764059249&fm=26&gp=0.jpg"
        alt=""  
        class="tp"
      >
    </div>
    <div class="dv">
      <div>
        <div class="dl">用户登录</div>
      </div>
      <div class="yh">
        <div class="yh1">用户名</div>
        <input
          type="text"
          placeholder="请输入用户名"
          class="yh2"
        >
      </div>
      <div class="xz">
        <div class="xz1">选择头像</div>
        <div class="xz2">
          <div class="tpw">
            <div v-for="(item,index) in imgList" :key="index">

              <img :src="item.name" alt="" class="tpy">
            </div>
          </div>
        </div>
        <button type="" class="but" style="?android:attr/borderlessButtonStyle">登录<tton>
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
     imgList: [{
          name: require('../assets/avatar01.jpg')
        },
        {
          name: require('../assets/avatar02.jpg')
        },
        {
          name: require('../assets/avatar03.jpg')
        },
        {
          name: require('../assets/avatar04.jpg')
        },
        {
          name: require('../assets/avatar05.jpg')
        },
        {
          name: require('../assets/avatar06.jpg')
        },
        {
          name: require('../assets/avatar07.jpg')
        },
        {
          name: require('../assets/avatar08.jpg')
        },
        {
          name: require('../assets/avatar09.jpg')
        },
        {
          name: require('../assets/avatar10.jpg')
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
.tp {
  width: 100%;
  height: 750px;
}
.dv {
  width: 400px;
  height: 330px;
  margin-left: 550px;
  position: absolute;
  top: 150px;
  background: rgba($color: #bdabb2, $alpha: 0.5);
  border-radius: 10px;
}
.dl {
  font-size: 26px;
  text-align: center;
}
.yh {
  margin-left: 50px;
  margin-top: 30px;
}
.yh1 {
  font-size: 18px;
}
.yh2 {
  width: 230px;
  height: 30px;
  margin-top: 5px;
  font-size: 13px;
  border-radius: 5px;
  border: none;
  -webkit-appearance: none; /*去除阴影边框*/
  outline: none;
}
.xz {
  margin-left: 50px;
  margin-top: 10px;
}
.xz1 {
  font-size: 18px;
}
.xz2 {
  width: 280px;
  height: 108px;
  margin-top: 10px;
  border: 1px solid #ccc;
  background: #ccc;
}
.but {
  margin-top: 5px;
  width: 270px;
  height: 40px;
  background: #1aad19;
  border-radius: 5px;
  border: none;
  -webkit-appearance: none; /*去除阴影边框*/
  outline: none;
  color: white;
}
.tpw {
  display: flex;
  flex-wrap: wrap;
}
.tpy {
  width: 50px;
  height: 50px;
  margin-left: 5px;
}
</style>
