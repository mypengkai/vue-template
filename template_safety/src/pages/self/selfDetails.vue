<template>
  <div class="selfDetails">
    <van-nav-bar fixed title="自检整改单下发" left-text="返回" left-arrow @click-left="$router.back()" />
    <div class="conent">
      <!--基础信息  -->
      <div class="base">
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
        >基础信息</van-divider>
        <ul>
          <li>巡检名称：{{baseObj.spxjname}}</li>
          <li>所属机构：{{baseObj.departname}}</li>
          <li>所属部门：{{baseObj.CheckUserdepartment}}</li>
          <li>巡检位置：{{baseObj.projectName}}</li>
          <li>巡检性质：{{baseObj.ipName}}</li>
          <li>检查人：{{baseObj.spCheckUserName}}</li>
          <li>检查时间：{{baseObj.spCreateDateTime}}</li>
          <li>通知人：{{baseObj.spNotifierName}}</li>
        </ul>
      </div>
      <!-- 详细 -->
      <div class="specifice">
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
        >整改内容</van-divider>
        <div ref="sonDown">
          <downRectify
            v-for="(item,index) in specList"
            :key="index"
            :list="[item]"
            :subscript="index"
            :usID="baseObj.spCheckUserId"
          ></downRectify>
        </div>
      </div>
      <van-button type="info" size="large" @click="downReform" v-if="isShow">下发整改</van-button>
    </div>
  </div>
</template>
<script>
import self from "@/api/self";
export default {
  components: {
    downRectify: () => import("@/components/downRectify.vue")
  },
  data() {
    return {
      id: this.$route.query.id,
      status:this.$route.query.state,
      baseObj: {},
      specList: [],
      isShow: false
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      self.selfDeatil({ id: this.id }).then(res => {
        if (res.data.success == 0) {
          this.baseObj = res.data.obj;
          this.specList = res.data.rows;
          let states = [];
          for (let item of this.specList) {
            states.push(item.sprState);
          }
          // sprState  0:安全 1：有隐患
          let state = states.some(el => el == 1);
          //只要有一个隐患 并且登录用户是检查人，未发整改 可以下发整改
          if (
            state &&
            this.status == -1 &&
            this.baseObj.spCheckUserId == this.$store.state.userID
          ) {
            this.isShow = true;
          } else {
            this.isShow = false;
          }
        }
      });
    },
    downReform() {
      let arr = this.$refs.sonDown.children;
      let paramsArr = [];
      for (let i = 0; i < arr.length; i++) {
        paramsArr.push(arr[i].__vue__.sendData);
      }

      //验证
      for (let i = 0; i < paramsArr.length; i++) {
        if (paramsArr[i].srUserId.length == 0) {
          this.$toast("请选择整改人");
          return false;
        }
      }
      self.downRectify(paramsArr).then(res => {
        if (res.data.success == "0") {
          this.$toast("下发成功");
          this.$router.push("/self")
        }
      });
    }
  }
};
</script>
<style  scoped>
.selfDetails {
  background: #efeff4;
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
.van-button--large {
  width: 100%;
  height: 1rem;
  line-height: 0.6rem;
}
.van-nav-bar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10 !important;
}
</style>