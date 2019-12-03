<template>
  <div class="home">
    <!-- 子路由 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar route>
      <van-tabbar-item icon="chat-o" to="/news">消息</van-tabbar-item>
      <van-tabbar-item icon="tv-o" to="/work">工作台</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" to="/chart">组织机构</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">个人信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import client from "../../api/client";
export default {
  data() {
    return {
     
    };
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>