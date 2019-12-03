<template>
  <div class="recheckConent">
    <van-cell-group v-for="(item,index) in list" :key="index">
      <van-cell :label="item.spContent">
        <template slot="title">
          <span class="custom-title">安全隐患</span>
          <van-tag type="danger">{{item.hdGrade}}</van-tag>
        </template>
      </van-cell>
      <van-cell title="整改要求" :label="item.srContent"></van-cell>
      <van-cell title="附件">
          <template slot="label">
             <span>
                <viewer :images="item.files">
                  <img v-for="(src,index) in item.files" :src="fileURL+src.FilePath" :key="index" />
                </viewer>
              </span>
          </template>
      </van-cell>
      <van-cell title="整改完成时间" :value="item.srFinishDate" />
      <van-cell title="指定整改人" :value="item.srUserName" />

      <!-- 循环组件 -->
      <reformLoop :loopConent="item.Reply"></reformLoop>

      <div v-if="$store.state.userID==item.srUserId && item.type==1">
        <van-cell-group>
          <van-cell title="复核说明">
            <template slot="label">
              <van-field
                v-model="sendData.replayContent"
                rows="2"
                autosize
                type="textarea"
                placeholder="请输入复核内容"
              />
            </template>
          </van-cell>
        </van-cell-group>
        <van-uploader
          v-model="fileList"
          multiple
          :max-count="3"
          :after-read="afterRead"
          preview-size="70"
           capture="camera"
        />
        <div class="sumitButton">
          <van-button type="info" size="small" @click="save('2')">不通过</van-button>
          <van-button type="info" size="small" @click="save('1')">通 过</van-button>
        </div>
      </div>
    </van-cell-group>
  </div>
</template>
<script>
import self from "@/api/self";
import reform from "@/api/reform";
export default {
  props: ["list", "subscript", "id"],
  components: {
    reformLoop: () => import("./reformLoop.vue")
  },
  inject: ["reload"],
  data() {
    return {
      type: "SafetyReply", // 安全
      fileList: [], // 图片预览
      sendData: {
        id: "", //安全巡检id
        replayUserId: "", // 回复人id
        replayUserName: "", // 回复人名称
        srId: "", // 整改内容id
        replayType: 1,
        replayState: "",
        replayContent: "", // 整改内容
        filesId: "" // 文件id
      }
    };
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
          this.sendData.filesId = res.data.obj;
        }
      });
    },
    save(val) {
      this.sendData.replayState = val;
      this.sendData.id = this.id;
      this.sendData.replayUserId = this.list[0].srUserId;
      this.sendData.replayUserName = this.list[0].srUserName;
      this.sendData.srId = this.list[0].srid;
      if (this.sendData.replayContent.length == 0) {
        this.$toast("请输入复核内容");
        return false;
      }
      reform.getSelf(this.sendData).then(res => {
        if (res.data.success == 0) {
          this.$toast("复核成功");
          this.reload();
        }
      });
    }
  }
};
</script>
<style scoped>
.recheckConent {
  height: 100%;
  padding: 0 0.2rem 0.2rem 0.2rem;
}
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem 0.2rem 0.2rem 0.5rem;
  overflow: hidden;
  color: #323233;
  font-size: 0.3rem;
  line-height: 0.53333rem;
  background-color: #fff;
}
.van-cell__value {
  position: relative;
  overflow: hidden;
  color: #1989fa;
  text-align: left;
  vertical-align: middle;
}

img {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.1rem;
}
.van-cell-group {
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.van-cell__label {
  margin-top: 3px;
  color: #1989fa;
  font-size: 12px;
  line-height: 18px;
}
.van-uploader {
  position: relative;
  display: inline-block;
  margin-left: 0.5rem;
}
.sumitButton {
  display: flex;
  justify-content: space-around;
  padding: 0.2rem 0;
}
</style>
