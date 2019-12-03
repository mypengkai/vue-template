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
        <van-uploader
          :after-read="afterRead"
          v-model="fileList"
          multiple
          :max-count="3"
          capture="camera"
          preview-size="70px"
        />
      </div>
    </div>
  </div>
</template>
<script>
import self from "@/api/self";
export default {
  props: ["list", "subscript"],
  data() {
    return {
      fileList: [],
      type: "SafetyPatrol", // 安全
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
    afterRead(file) {
      let formData = new FormData();
      formData.append("type", this.type);
      if (file.length > 0) {
        for (let key of file) {
          formData.append("file", key.file);
        }
      } else {
        formData.append("file", file.file);
      }
      self.uploadFile(formData).then(res => {
        if (res.data.success == 0) {
          this.conentObj.fileId = res.data.obj;
        }
      });
    }
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
  margin: 10px 20px;
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
/* .van-uploader__preview {
  position: relative;
  margin: 0.2rem;
}
.van-uploader__upload {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  box-sizing: border-box;
  width: 1.77778rem;
  height: 1.77778rem;
  margin: 0.2rem;
  background-color: #fff;
  border: 0.02222rem dashed #e5e5e5;
  border-radius: 0.08889rem;
} */
</style>