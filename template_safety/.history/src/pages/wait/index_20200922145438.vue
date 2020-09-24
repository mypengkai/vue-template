<template>
  <div class="wait">
    <!-- 头部 -->
    <van-nav-bar
      fixed
      title="待办事项"
      left-text="返回"
      right-text="新增"
      left-arrow
      @click-left="$router.push('/work')"
      @click-right="$router.push('/addWait')"
    />
    <div class="conent">
      <!-- 搜索 -->
      <van-search placeholder="请输入搜索关键词" v-model="sendData.sppName" @search="onSearch" />
      <!-- list列表 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        van-clearfix
        :immediate-check="false"
      >
        <ul v-for="(item,index) in WaitList" :key="index" @click="routerDetails(item.id)">
          <li class="zero">{{index+1}}</li>
          <li class="first">待办名称：{{item.sppName}}</li>
          <li class="two">检查人：{{item.sppCheckUserName}}</li>
          <li>
            检查项：
            <p v-for="(value,index) in item.hdContent.split(',')" :key="index">{{value}}</p>
          </li>
          <li>巡检部门：{{item.sppDepartmentName}}</li>
          <li>填报时间：{{item.sppCreateDateTime}}</li>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
import wait from "@/api/wait";
export default {
  data() {
    return {
      WaitList: [],
      noData: false,
      loading: false,
      finished: false,
      sendData: {
        offset: 0,
        limit: 10,
        sppName: "",
        sppBeginDate: "",
        sppEndDate: "",
        auth: "0"
      }
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      wait.getWaitList(this.sendData,).then(res => {
        if (res.data.success == 0) {
          this.loading = false; //数据请成功后
          if (this.sendData.offset == 0) {
            this.WaitList = res.data.rows;
          } else {
            this.WaitList = [...this.WaitList, ...res.data.rows];
          }
          this.noData = this.WaitList.length == res.data.total;
        }
      });
    },
    onLoad() {
      if (this.noData) {
        this.loading = false;
        this.finished = true;
      } else {
        this.sendData.offset += this.sendData.limit;
        this.getInit();
      }
    },
    onSearch() {
      this.getInit();
    },
    routerDetails(id){
       this.$router.push({path:"/waitDetails",query:{id:id}})
    }
  }
};
</script>
<style scoped>
.wait {
  height: 100%;
  background: #efeff4;
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
.first, .two{
  color: blue;
}
p{
  padding:0;
  margin: 0;
  color: red;
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
 
