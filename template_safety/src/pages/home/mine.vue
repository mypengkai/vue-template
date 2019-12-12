<template>
  <div class="mine">
    <!-- 头部 -->
    <van-nav-bar title="个人信息" />
    <div class="imgBox">
      <img src="../../assets/timg.jpg" alt />
    </div>
    <van-cell-group>
      <van-cell title="姓名" :value="mineObj.realname" />
      <van-cell title="账号" :value="mineObj.username" />
      <van-cell title="组织机构" :value="mineObj.departname" />
      <van-cell title="部门" :value="mineObj.department" />
      <!-- <van-cell title="电话" :value="mineObj.mobilePhone" /> -->
      <van-cell title="检查更新" :value="version" icon="down" @click="checkUpload" />
    </van-cell-group>
    <van-button type="danger" size="large" @click="goBack">退出登录</van-button>
  </div>
</template>
<script>
import mine from "@/api/mine";
import { checkVersion } from "../../units/sdk";
export default {
  data() {
    return {
      mineObj: {},
      version: "1.0"
    };
  },
  created() {
    this.mineInit();
    if (window.plus) {
      this.getCurrentVersion();
    } else {
      document.addEventListener("plusready", this.getCurrentVersion, false);
    }
  },
  methods: {
    mineInit() {
      mine.getMine().then(res => {
        if (res.data.success == 0) {
          this.mineObj = res.data.obj;
        }
      });
    },
    goBack() {
      this.$store.commit("setToken", null);
      this.$router.push("/login");
    },

    //点击检查版本
    checkUpload() {
      checkVersion();
    },
    //获取当前版本号
    getCurrentVersion() {
      this.version = plus.runtime.version;
    }
  }
};
</script>
<style scoped>
.imgBox {
  width: 80px;
  height: 80px;
  margin: 10px auto;
}
.imgBox img {
  width: 100%;
  height: 100%;
}
.van-cell__value {
  position: relative;
  overflow: hidden;
  color: rgb(43, 137, 226);
  text-align: right;
  vertical-align: middle;
}
</style>