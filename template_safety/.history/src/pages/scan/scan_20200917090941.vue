
<template>
  <div class="scan">
    <van-nav-bar title="扫码签到" left-text="返回" left-arrow @click-left="closeScan" />
    <div id="bcid">
      <div style="height:40%"></div>
      <p class="tip">...载入中...</p>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="scan" icon="scan">扫一扫</van-tabbar-item>
      <van-tabbar-item name="paid" icon="paid" @click="scanImg">相册</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type='text/ecmascript-6'>
let scan = null;
import meeting from "../../api/meeting";
export default {
  data() {
    return {
      active: "scan",
      signObj: {
        userid: "", // 用户id
        meetingid: "", // 扫码返回id
      },
    };
  },
  created() {
    this.signObj.userid = this.$store.state.userID;
  },
  mounted() {
    //跳转时自动开启
    this.startRecognize();
  },
  methods: {
    // 创建扫描控件
    startRecognize() {
      if (!window.plus) return;
      scan = new plus.barcode.Barcode(
        "bcid",
        [plus.barcode.QR, plus.barcode.EAN8, plus.barcode.EAN13],
        {
          frameColor: "#009DE2",
          scanbarColor: "#009DE2",
        }
      );
      this.$store.commit("setScan", scan);
      // 开始扫描
      scan.start();
      //成功回调
      scan.onmarked = this.onmarked;
    },
    // 关闭返回
    closeScan() {
      if (!window.plus) return;
      scan.close();
      this.$router.push({ path: "/work" });
    },
    // 扫码成功
    onmarked(type, code, file) {
      switch (type) {
        case plus.barcode.QR:
          type = "QR";
          break;
        case plus.barcode.EAN13:
          type = "EAN13";
          break;
        case plus.barcode.EAN8:
          type = "EAN8";
          break;
        default:
          type = "其它" + type;
          break;
      }
      this.signObj.meetingid = code;
      this.initScan();
      this.closeScan();
    },
    // 从系统相册选择文件
    scanImg() {
      let that = this;
      if (!window.plus) return;
      plus.gallery.pick(
        function (path) {
          // 选择图片成功 调用扫码
          plus.barcode.scan(
            path,
            function (type, code, file) {
              that.signObj.meetingid = code;
              that.initScan();
              that.closeScan();
            },
            function (err) {
              plus.nativeUI.alert("没有可识别的二维码");
            }
          );
        },
        function (error) {
          throw error;
        },
        { filter: "image" }
      );
    },
    //签到
    initScan() {
      meeting.getScan(this.signObj).then((res) => {
        if (res.data.success == 0) {
          this.$toast("签到成功");
        } else {
          this.$toast(res.data.msg);
        }
      });
    },
  },
};
</script>
<style scoped>
.scan {
  height: 100%;
  /* width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: #fff;
  background: #fff; */
}
#bcid {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  color: #fff;
  background: #fff;
}
p {
  font-size: 0.3rem;
}
</style>
