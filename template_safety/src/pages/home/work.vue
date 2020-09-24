<template>
  <div class="work">
    <!-- 头部 -->
    <van-nav-bar title="上海同望信息技术有限公司" fixed />
    <!-- 轮播 -->
    <div class="conent">
      <van-swipe :autoplay="3000" indicator-color="white" style="width:100%;height:3rem">
        <van-swipe-item>
          <img src="../../assets/swiper.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/swiper.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/swiper.jpg" alt />
        </van-swipe-item>
      </van-swipe>
      <!-- 宫格 -->
      <van-grid :column-num="3">
        <van-grid-item icon="home-o" text="待办事项" to="/wait" />
        <van-grid-item icon="photo-o" text="自主检查" to="/self" />
        <van-grid-item icon="apps-o" text="整改" to="/reform" />
        <van-grid-item icon="eye-o" text="复核" to="recheck" />
        <van-grid-item icon="flag-o" text="痕迹" to="trace" />
        <van-grid-item icon="scan" text="签到" to="scan" />
      </van-grid>
    </div>
  </div>
</template>
<script>
import "@/api/request";
export default {
  data() {
    return {};
  }
};
</script>
<style  scoped>
img {
  width: 100%;
  height: 100%;
  display: block;
}
.conent {
  margin-top: 46px;
}
</style>