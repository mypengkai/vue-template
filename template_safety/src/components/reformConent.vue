<template>
  <div class="reformConent">
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

      <div v-if="$store.state.userID==item.srUserId && item.type==0">
        <van-cell-group>
          <van-cell title="整改说明">
            <template slot="label">
              <van-field
                v-model="sendData.replayContent"
                rows="2"
                autosize
                type="textarea"
                placeholder="请输入整改内容"
              />
            </template>
          </van-cell>
        </van-cell-group>
        <Attach :attachList="fileList.files" :readonly="false" :uploadFileOption="fileList.type" @uploadCallback="getCallback"></Attach>
        <van-button type="info" size="large" @click="save">提交保存</van-button>
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
    reformLoop: () => import("./reformLoop.vue"),
    Attach:()=>import("./Attach.vue")
  },
  inject: ["reload"],
  data() {
    return {
      sendData: {
        id: "", //安全巡检id
        replayUserId: "", // 回复人id
        replayUserName: "", // 回复人名称
        srId: "", // 整改内容id
        replayType: 0,
        replayState: 0,
        replayContent: "", // 整改内容
        filesId: "" // 文件id
      },
      fileList: {
        files: [],
        type: "SafetyReply" // 安全
      }
    };
  },
  methods: {
    getCallback(data){
         data = eval("(" + data + ")");
         this.sendData.filesId += data.obj + ","
    },
    save() {
      this.sendData.id = this.id;
      this.sendData.replayUserId = this.list[0].srUserId;
      this.sendData.replayUserName = this.list[0].srUserName;
      this.sendData.srId = this.list[0].srid;
      if (this.sendData.replayContent.length == 0) {
        this.$toast("请输入整改内容");
        return false;
      }
      reform.getSelf(this.sendData).then(res => {
        if (res.data.success == 0) {
          this.$toast("整改成功");
          this.reload();
        }
      });
    }
  }
};
</script>
<style scoped>
.reformConent {
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
</style>