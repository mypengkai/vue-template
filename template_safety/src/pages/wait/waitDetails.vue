<template>
  <div class="waitDetails">
    <van-nav-bar title="待办明细" left-text="返回" fixed left-arrow @click-left="$router.push('/wait')" />
    <div class="conent">
      <van-cell-group>
        <van-field label="巡检名称" v-model="baseDetail.sppName" readonly />
        <van-cell title="巡检性质" :value="baseDetail.ipName" />
        <van-cell title="检查人" :value="baseDetail.sppCheckUserName" />
        <van-cell title="巡检部门" :value="baseDetail.sppDepartmentName" />
        <van-cell title="巡检位置" :value="baseDetail.projectName" />
        <van-cell title="计划开始日期" :value="baseDetail.sppBeginDate" />
        <van-cell title="计划完工日期" :value="baseDetail.sppEndDate" />
        <van-cell title="工期（天）" :value="baseDetail.sppTimeLimit" />
        <van-cell title="检查项">
          <template slot="label">
            <ul>
              <li v-for="(item,index) in conentList" :key="index">{{item.hdContent}}</li>
            </ul>
          </template>
        </van-cell>
        <van-cell title="通知人" :label="baseDetail.sppNotifierName" />
        <van-cell title="填报人" :value="baseDetail.sppCreatePerson" />
      </van-cell-group>
      <van-button
        type="info"
        size="large"
        @click="$router.push('/startWait')"
        v-if="baseDetail.sppCheckUserId == $store.state.userID"
      >开始检查</van-button>
    </div>
  </div>
</template>
<script>
import wait from "../../api/wait";
export default {
  data() {
    return {
      baseDetail: {},
      conentList: [],
      id: this.$route.query.id
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      wait.getWaitDetails(this.id).then(res => {
        if (res.data.success == 0) {
          this.baseDetail = res.data.obj;
          this.conentList = res.data.rows;
          this.$store.commit("setPointList",this.conentList);
          this.$store.commit("setPointObj",this.baseDetail)
        }
      });
    }
  }
};
</script>
<style  scoped>
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 0.3rem;
  line-height: 0.4rem;
  background-color: #fff;
}
.conent {
  margin-top: 1rem;
}
.van-cell__value {
  position: relative;
  overflow: hidden;
  color: #000;
  text-align: right;
  vertical-align: middle;
}
.van-cell__label {
  margin-top: 3px;
  color: #000;
  font-size: 12px;
  line-height: 18px;
}
</style>