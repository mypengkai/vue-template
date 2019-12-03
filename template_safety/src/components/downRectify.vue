<template>
  <div class="downRectify">
    <van-cell-group v-for="(item,index) in list" :key="index">
      <van-cell :label="item.hdContent">
        <template slot="title">
          <span class="custom-title">安全隐患</span>
          <van-tag type="danger">{{item.hdGrade}}</van-tag>
        </template>
      </van-cell>
      <van-cell title="整改要求" :label="item.ZGmethod"></van-cell>
      <van-cell title="检查状态">
        <template slot="default">
          <van-tag type="danger" size="medium" v-if="item.sprState==1">有隐患</van-tag>
          <van-tag type="success" size="medium" v-else-if="item.sprState==0">安全</van-tag>
        </template>
      </van-cell>
      <van-cell title="附件">
        <template slot="label">
          <span>
            <viewer :images="item.ResultFile">
              <img
                v-for="(src,index) in item.ResultFile"
                :src="fileURL+src.sprfFilePath"
                :key="index"
              />
            </viewer>
          </span>
        </template>
      </van-cell>

      <template v-if="item.sprState==1">
        <van-cell-group v-if="item.srUserName">
          <van-cell title="整改完成时间：" :value="item.srFinishDate" />
          <van-cell title="选择整改人：" :value="item.srUserName" />
        </van-cell-group>

        <van-cell-group v-else>
          <van-cell
            title="整改完成时间："
            :value="sendData.srFinishDate"
            is-link
            required
            @click="isTimer=true"
          />
          <van-cell
            title="选择整改人："
            :value="sendData.srUserName"
            is-link
            required
            @click="isExamine=true"
          />
        </van-cell-group>
      </template>
    </van-cell-group>

    <!-- 组件 -->
    <!-- 整改人 -->
    <van-popup v-model="isExamine" position="bottom" :style="{width:'100%',height:'60%'}">
      <examine @cancel="isExamine=false" @getExamine="checKExamine"></examine>
    </van-popup>
    <!-- 时间 -->
    <van-popup v-model="isTimer" position="bottom" :style="{width:'100%',height:'60%'}">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @confirm="confirm"
        @cancel="isTimer=false"
      />
    </van-popup>
  </div>
</template>
<script>
import current from "@/units/mathTime";

export default {
  components: {
    examine: () => import("./examine.vue")
  },
  props: ["list", "subscript"],
  data() {
    return {
      isExamine: false,
      isTimer: false,
      sendData: {
        id: "", //整改内容ID
        srUserId: "", //整改人ID
        srUserName: "", //整改人名称
        srFinishDate: "", //要求完成时间
        qpCreatePerson: "", //填报人名称
        spCreatePersonId: "" //填报人ID
      },
      currentDate: new Date(),
      minDate: new Date()
    };
  },
  created() {
    this.sendData.srFinishDate = current(null, new Date());
    this.sendData.id = this.list[0].id;
    this.sendData.qpCreatePerson = this.$store.state.userName;
    this.sendData.spCreatePersonId = this.$store.state.userID;
  },
  methods: {
    checKExamine(data) {
      this.sendData.srUserId = data.id;
      this.sendData.srUserName = data.name;
    },

    confirm() {
      this.sendData.srFinishDate = current(null, this.currentDate);
      this.isTimer = false;
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
</style>