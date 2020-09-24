<template>
  <div class="traceDetail">
    <van-nav-bar fixed title="痕迹详情" left-text="返回" left-arrow @click-left="$router.back()" />
    <div class="conent">
      <div class="base">
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
        >基础信息</van-divider>
        <ul>
          <li>巡检名称：{{baseObj.spxjname}}</li>
          <li>所属机构：{{baseObj.departname}}</li>
          <li>所属部门：{{baseObj.CheckUserdepartment}}</li>
          <li>巡检位置：{{baseObj.projectName}}</li>
          <li>检查人：{{baseObj.spCheckUserName}}</li>
          <li>检查时间：{{baseObj.spCreateDateTime}}</li>
          <li>通知人：{{baseObj.spNotifierName}}</li>
          <li style="color:red">隐患条数:{{baseObj.youhd}}</li>
        </ul>
      </div>
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
      >痕迹内容</van-divider>
      <div class="child">
        <recheckConent
          v-for="(item,index) in traceList"
          :key="index"
          :list="[item]"
          :subscript="index"
          :id="baseObj.spid"
        ></recheckConent>
      </div>
    </div>
  </div>
</template>
<script>
import trace from "@/api/trace";

export default {
  components: {
    recheckConent: () => import("@/components/recheckConent")
  },
  data() {
    return {
      id: this.$route.query.id,
      baseObj: {},
      traceList: []
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      trace.getDetail({ id: this.id }).then(res => {
        console.log(res, "res");
        if (res.status == 200) {
          this.baseObj = res.data.obj;
          this.traceList = res.data.rows;
          // console.log( this.baseObj,' this.baseObj')
        }
      });
    }
  }
};
</script>
<style scoped>
.traceDetail {
  background: #efeff4;
  height: 100%;
}
.conent {
  margin-top: 46px;
}
.base ul {
  background: #fff;
  padding: 0.2rem 0.5rem;
}
.base li {
  font-size: 0.3rem;
  line-height: 0.5rem;
}

.van-nav-bar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10 !important;
}
</style>