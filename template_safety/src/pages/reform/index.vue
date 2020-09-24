<template>
  <div class="reform">
    <van-nav-bar fixed title="安全整改" left-text="返回" left-arrow @click-left="$router.push('/work')" />
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
        <ul v-for="(item,index) in reformList" :key="index" @click="routerDetail(item)">
          <li class="zero">{{index+1}}</li>
          <li class="first">巡检名称：{{item.spxjname}}</li>
          <li>巡检位置：{{item.projectName}}</li>
          <li>巡检性质：{{item.ipName}}</li>
          <li>检查人：{{item.spCheckUserName}}</li>
          <li>创建时间：{{item.spCreateDateTime}}</li>
          <li class="six">
            <span>整改数量:{{item.done}}</span>
            <span>待整改:{{item.undone}}项</span>
            <span>待复核:{{item.uncheck}}项</span>
          </li>
          <li>
            是否逾期：
            <span v-if="item.overdue ==1" style="color:#ed1941;">逾期</span>
            <span v-if="item.overdue ==null || item.overdue ==0" style="color:#45b97c;">未逾期</span>
          </li>
          <li>未完成数量/已完成数量({{item.unfinish}}/{{item.finish}})</li>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
import reform from "@/api/reform";
export default {
  data() {
    return {
      reformList: [],
      noData: false,
      loading: false,
      finished: false,
      formData: {
        offset: 0, // 开始页
        limit: 10, // 每页数量
        spxjname: "", // 巡检名称
        spBeginDate: "", // 开始时间
        spEndDate: "", // 结束时间
        isOverdue: "", // 逾期 状态
        rectificationState: "0" // 整改状态（0待整改1待复检）
      }
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      reform.getReformList(this.formData).then(res => {
        if (res.data.success == 0) {
          this.loading = false; //数据请成功后
          if (this.formData.offset == 0) {
            this.reformList = res.data.rows;
          } else {
            this.reformList = [...this.reformList, ...res.data.rows];
          }
          this.noData = this.reformList.length == res.data.total;
        }
      });
    },
    onLoad() {
      if (this.noData) {
        this.finished = true;
        this.loading = false;
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
        path: "/reformDetails",
        query: { id: item.id }
      });
    }
  }
};
</script>
<style scoped>
.reform {
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

.six {
  display: flex;
  justify-content: space-between;
}
.first {
  color: blue;
}
.six span:nth-child(1) {
  color: blue;
}
.six span:nth-child(2) {
  color: #fff;
  background-color: #ffc20e;
  padding: 0.04rem 0.2rem;
  border-radius: 0.1rem;
}
.six span:nth-child(3) {
  background-color: #f26522;
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