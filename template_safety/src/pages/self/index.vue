<template>
  <div class="self">
    <van-nav-bar
      fixed
      title="自主检查"
      left-text="返回"
      right-text="新增"
      left-arrow
      @click-left="$router.push('/work')"
      @click-right="$router.push('/addSelf')"
    />
    <div class="conent">
      <!-- 搜索 -->
      <van-search placeholder="请输入搜索关键词" v-model="formData.spxjname" @search="onSearch" />
      <!-- list -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        van-clearfix
        :immediate-check="false"
      >
        <ul v-for="(item,index) in selfList" :key="index" @click="routerDetail(item)">
          <li class="zero">{{index+1}}</li>
          <li class="first">
            <span>巡检名称：{{item.spxjname}}</span>
            <span v-if="item.RectificationState ===-1" style="background:#464547">未发整改</span>
            <span v-if="item.RectificationState ===0" style="background:#45b97c">通过</span>
            <span v-if="item.RectificationState ===1" style="background:#f26522">整改中</span>
          </li>
          <li>巡检位置：{{item.projectName}}</li>
          <li>巡检性质：{{item.ipName}}</li>
          <li>检查人：{{item.spCheckUserName}}</li>
          <li>检查时间：{{item.spCreateDateTime}}</li>
          <li class="six">
            <span>检查总数：{{item.checkCount}}</span>
            <span>安全：{{item.safetyCount}}项</span>
            <span>有隐患：{{item.hiddenCount}}项</span>
          </li>
          <li>整改数量/整改完成数量（{{item.RectificationCount}}/{{item.passCount}}）</li>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
import self from "@/api/self";
export default {
  data() {
    return {
      selfList: [],
      noData: false,
      loading: false,
      finished: false,
      formData: {
        offset: 0, // 开始页
        limit: 10, // 每页数量
        spCreateDateTime: "", // 创建时间
        spxjname: "", // 巡检名称
        sprRectificationState: "", // 状态（-1：整改待发送 0：待整改 1：待复核 2：通过 3：不通过）
        isCheck: 2,
        spBeginDate: "", // 开始时间
        spEndDate: "" // 结束时间
      }
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      self.getSelfList(this.formData).then(res => {
        if (res.data.success == 0) {
          this.loading = false; //数据请成功后
          if (this.formData.offset == 0) {
            this.selfList = res.data.rows;
          } else {
            this.selfList = [...this.selfList, ...res.data.rows];
          }

          this.noData = this.selfList.length == res.data.total;
        }
      });
    },
    onLoad() {
      if (this.noData) {
        this.loading = false;
        this.finished = true;
      } else {
        this.formData.offset += this.formData.limit;
        this.getInit();
      }
    },
    onSearch() {
      this.getInit();
    },
    routerDetail(item) {
      this.$router.push({
        path: "/selfDetails",
        query: { id: item.id, state: item.RectificationState }
      });
    }
  }
};
</script>
<style scoped>
.self {
  background: #efeff4;
  height: 100%;
}
.conent {
  margin-top: 1rem;
}
.conent ul {
  margin: 10px 0;
  padding: 5px;
  background: #fff;
  position: relative;
}
.conent li {
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.first,
.six {
  display: flex;
  justify-content: space-between;
}
.first span:nth-child(1),
.six span:nth-child(1) {
  color: blue;
}
.first span:nth-child(2) {
  color: #fff;
  background-color: black;
  padding: 0.06rem;
  border-radius: 0.1rem;
}
.six span:nth-child(2) {
  color: #fff;
  background-color: forestgreen;
  padding: 0.04rem 0.2rem;
  border-radius: 0.1rem;
}
.six span:nth-child(3) {
  background-color: red;
  color: #fff;
  padding: 0.04rem 0.2rem;
  border-radius: 0.1rem;
}
.zero {
  background: #ccc;
  color: #fff;
  height: 100%;
  width: 0.4rem;
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
}
/* 除了第一个之外的元素 */
li:not(:first-child) {
  margin-left: 0.5rem;
}
</style>