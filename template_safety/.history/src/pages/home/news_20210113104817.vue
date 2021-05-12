<template>
  <div class="news">
    <!-- 头部 -->
    <van-nav-bar title="消息列表" fixed />
    <van-cell-group class="conent">
      <van-cell v-for="(item,index) in clientList" :key="index" title="消息通知" icon="volume-o" :label="item.sendMsg" @click="$router.push('/reform')" />
    </van-cell-group>
  </div>
</template>
<script>
import client from "../../api/client";
export default {
  data() {
    return {
      sendData: {
        offset: 0,
        limit: 1000
      },
      clientList: []
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      client.getPushList(this.sendData).then(res => {
        if (res.data.success == 0) {
          this.clientList = res.data.rows;
        }
      });
    }
  }
};
</script>
<style  scoped>
.conent {
  margin-top: 46px;
}
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: blue;
  font-size: 0.28rem;
  line-height: 0.5rem;
  background-color: #fff;
}
</style>