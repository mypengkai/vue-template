<template>
  <div class="startWait">
    <van-nav-bar title="计划检查" left-text="返回" left-arrow @click-left="$router.back()" fixed />
    <div class="conent">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
      >基础信息</van-divider>
      <ul>
        <li>所属部门：{{sppObj.sppDepartmentName}}</li>
        <li>巡检位置：{{sppObj.projectName}}</li>
        <li>检查性质：{{sppObj.ipName}}</li>
        <li>检查人：{{sppObj.sppCheckUserName}}</li>
        <li>通知人：{{sppObj.sppNotifierName}}</li>
      </ul>
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
      >巡检内容</van-divider>
      <van-row class="vanRow">
        <van-col span="4">序号</van-col>
        <van-col span="10">巡检内容</van-col>
        <van-col span="4">隐患等级</van-col>
        <van-col span="6">巡检结果</van-col>
      </van-row>
      <div ref="child">
        <product v-for="(item,index) in sppList" :key="index" :list="[item]" :subscript="index"></product>
      </div>
      <van-button type="info" size="large" @click="save">保存</van-button>
    </div>
  </div>
</template>
<script>
import self from "@/api/self";
export default {
  components: {
    product: () => import("@/components/product")
  },
  data() {
    return {
      sendData: {
        departId: "", // 部门id
        projectId: "", // 分部分项id(位置)
        spCheckUserId: "", // 检查人id
        spNotifier: "", // 通知人id
        result: [] // list数据
      }
    };
  },
  computed: {
    sppObj() {
      return this.$store.state.ponitObj;
    },
    sppList() {
      return this.$store.state.pointList;
    }
  },
  methods: {
    save() {
      this.sendData.departId = this.sppObj.sppDepartmentId;
      this.sendData.projectId = this.sppObj.projectId;
      this.sendData.spCheckUserId = this.sppObj.sppCheckUserId;
      this.sendData.spNotifier = this.sppObj.sppNotifier;
      let arr = this.$refs.child.children;
      let list = [];
      for (let i = 0; i < arr.length; i++) {
        list.push(arr[i].__vue__.conentObj);
      }
      this.sendData.result = list;
      self.addSelf(this.sendData).then(res => {
        if (res.data.success == 0) {
          this.$toast("新增成功");
          this.$router.push("/self");
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
.conent li {
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.conent ul {
  padding: 5px 20px;
}
.vanRow {
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  border-bottom: 1px solid #ccc;
}
</style>
