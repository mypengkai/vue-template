<template>
  <div class="product">
    <div class="conentlist" v-for="(item,index) in list" :key="index">
      <van-row class="vanRow">
        <van-col span="4" style="color:blue;fontSize:0.4rem">{{subscript+1}}</van-col>
        <van-col span="10">{{item.hdContent || item.hdName}}</van-col>
        <van-col span="4" style="color:red;fontSize:0.36rem">{{ item.hdGrade}}</van-col>
        <van-col span="6">
          <van-radio-group v-model="conentObj.sprState" icon-size="12px">
            <van-radio name="0">安全</van-radio>
            <van-radio name="1">有隐患</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
      <div class="upload">
        <Attach :attachList="fileList.files" :readonly="false" :uploadFileOption="fileList.type" @uploadCallback="getCallback"></Attach>
      </div>
    </div>
  </div>
</template>
<script>
import self from "@/api/self";
export default {
  props: ["list", "subscript"],
  components: {
    Attach: () => import("./Attach.vue")
  },
  data() {
    return {
      fileList: {
        type: "SafetyPatrol", // 安全
        files: []
      },
      conentObj: {
        sphdid: "", // 隐患id
        spContent: "", // 隐患名称
        hdGrade: "", // 隐患等级
        sprState: "1", // 状态（0安全，1有隐患）
        fileId: "" // 文件成功返回id
      }
    };
  },
  created() {
    this.conentObj.sphdid = this.list[0].id;
    this.conentObj.spContent = this.list[0].hdName;
    this.conentObj.hdGrade = this.list[0].hdGrade;
  },
  methods: {
    getCallback(data) {
      data = eval("(" + data + ")");
      this.conentObj.fileId += data.obj + ","
    },
  }
};
</script>
<style  scoped>
.product li {
  font-size: 0.3rem;
}
.product .vanRow {
  font-size: 0.3rem;
  text-align: center;
}
.conentlist {
  border-bottom: 1px solid #ccc;
}
.upload {
  margin: 10px;
}
.van-radio {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  justify-content: center;
}

</style>