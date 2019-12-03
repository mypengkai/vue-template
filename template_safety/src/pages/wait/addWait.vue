<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="新增待办事项"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 单元格 -->
    <van-cell-group>
      <van-field label="待办名称" v-model="formData.sppName" readonly required />
      <van-cell
        title="巡检部门"
        :value="formData.sppDepartmentName"
        required
        is-link
        @click="isBanch=true"
      />
      <van-cell
        title="巡检位置"
        :value="formData.projectName"
        required
        is-link
        @click="isProject=true"
      />
      <van-cell title="巡检性质" :value="formData.ipName" required is-link @click="isKind=true" />
      <van-cell title="检查项" required is-link @click="isEmptyCheck">
        <template slot="label">
          <ul>
            <li v-for="(item,index) in formData.sppContentName" :key="index">{{item}}</li>
          </ul>
        </template>
      </van-cell>
      <van-cell
        title="检查人"
        :value="formData.sppCheckUserName"
        required
        is-link
        @click="isExamine=true"
      />
      <van-cell
        title="通知人"
        :label="formData.sppNotifierName"
        required
        is-link
        @click="isNotifyCheck"
      />
      <van-cell
        title="开始时间"
        :value="formData.sppBeginDate"
        required
        is-link
        @click="isTimerCheck('start')"
      />
      <van-cell
        title="结束时间"
        :value="formData.sppEndDate"
        required
        is-link
        @click="isTimerCheck('end')"
      />
      <van-cell title="工期（天）" :value="limit" />
      <van-cell title="创建人" :value="formData.spCreatePersonName" />
    </van-cell-group>
    <!-- 组件 -->
    <!-- 部门 -->
    <van-popup v-model="isBanch" position="bottom" :style="{width:'100%',height:'60%'}">
      <banch @cancel="isBanch=false" @getBanch="checkBanch"></banch>
    </van-popup>
    <!-- 巡检位置 -->
    <van-popup v-model="isProject" position="bottom" :style="{width:'100%',height:'60%'}">
      <project @cancel="isProject=false" @getProject="checkProject"></project>
    </van-popup>
    <!-- 巡检性质 -->
    <van-popup v-model="isKind" position="bottom" :style="{width:'100%',height:'60%'}">
      <kind @cancel="isKind=false" @getKind="checKKind"></kind>
    </van-popup>
    <!-- 检查项 -->
    <van-popup v-model="isEmpty" position="bottom" :style="{width:'100%',height:'100%'}">
      <empty
        @cancel="isEmpty=false"
        @getEmpty="checKEmpty"
        :id="this.formData.projectId"
        v-if="flag"
      ></empty>
    </van-popup>
    <!-- 检查人 -->
    <van-popup v-model="isExamine" position="bottom" :style="{width:'100%',height:'60%'}">
      <examine @cancel="isExamine=false" @getExamine="checKExamine"></examine>
    </van-popup>
    <!-- 通知人 -->
    <van-popup v-model="isNotify" position="bottom" :style="{width:'100%',height:'100%'}">
      <notify @cancel="isNotify=false" @getNotify="checKNotify" v-if="flag"></notify>
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
import banch from "@/api/banch";
import tool from "@/units/reg";
export default {
  components: {
    banch: () => import("@/components/banch"),
    project: () => import("@/components/project"),
    kind: () => import("@/components/kind"),
    empty: () => import("@/components/empty"),
    examine: () => import("@/components/examine"),
    notify: () => import("@/components/notify")
  },
  data() {
    return {
      formData: {
        projectId: "", // 分部分项
        projectName: "", // 分项名称
        sppName: "", //计划名称
        ipId: "", // 巡检性质 id
        ipName: "", // 性质名称
        sppCheckUserId: "", // 检查人id
        sppCheckUserName: "", // 检查人名称
        sppBeginDate: "", // 开始时间
        sppEndDate: "", // 结束时间
        sppContent: "", // 巡检id（检查项id）
        sppContentName:"",  // 巡检内容
        sppNotifier: "", // 通知人id
        sppNotifierName: "", // 通知人名称
        sppIsCreateSafetyPatrol: 0, // 是否创建（默认0）
        sppDepartmentId: "", // 巡检部门id
        sppDepartmentName: "", // 巡检部门名称
        spCreatePersonId: "", // 创建人id
        spCreatePersonName: "" //  创建人名称
      },
      flag: false,
      isBanch: false, // 部门
      isProject: false, // 分项
      isKind: false, // 性质
      isEmpty: false, // 检查项
      isExamine: false, //检查人
      isNotify: false, // 通知人
      isTimer: false, // 时间
      timeState: "", // 状态判断
      currentDate: new Date(),
      minDate: new Date()
    };
  },
  computed: {
    limit() {
      var dateBegin = new Date(this.formData.sppBeginDate); //将-转化为/，使用new Date
      var dateEnd = new Date(this.formData.sppEndDate); //获取当前时间
      var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
      return Math.floor(dateDiff / (24 * 3600 * 1000) + 1) + "天"; //计算出相差天数
    }
  },
  created() {
    this.formData.sppName = current("AQXJ", new Date());
    this.formData.spCreatePersonId = this.$store.state.userID;
    this.formData.spCreatePersonName = this.$store.state.userName;
    this.formData.sppBeginDate = current(null, new Date());
    this.formData.sppEndDate = current(null, new Date());
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // 接收子组件传入的值
    checkBanch(data) {
      this.formData.sppDepartmentId = data.id;
      this.formData.sppDepartmentName = data.name;
    },
    checkProject(data) {
      this.formData.projectId = data.zid;
      this.formData.projectName = data.name;
    },
    checKKind(data) {
      this.formData.ipName = data.ipName;
      this.formData.ipId = data.id;
    },
    isEmptyCheck() {
      if (this.formData.projectId.length == 0) {
        this.$toast("请先选择巡检位置");
        return false;
      }
      this.isEmpty = true;
      this.flag = false;
      this.$nextTick(() => {
        this.flag = true;
      });
    },
    checKEmpty(data) {
      let conent = "",names=""
      for (let item of data) {
        conent += item.id + ",";
        names += item.hdName + ','
      }
      this.formData.sppContent = conent;
      this.formData.sppContentName = names.split(",");
    },
    checKExamine(data) {
      this.formData.sppCheckUserId = data.id;
      this.formData.sppCheckUserName = data.name;
    },
    isNotifyCheck() {
      this.isNotify = true;
      this.flag = false;
      this.$nextTick(() => {
        this.flag = true;
      });
    },
    checKNotify(data) {
      let notifyId = "",
        notifyName = "";
      for (let item of data) {
        notifyId += item.id + ",";
        notifyName += item.name + ",";
      }
      this.formData.sppNotifier = notifyId.substring(0, notifyId.length - 1);
      this.formData.sppNotifierName = notifyName.substring(
        0,
        notifyName.length - 1
      );
    },
    isTimerCheck(val) {
      this.isTimer = true;
      this.timeState = val;
    },
    confirm() {
      if (this.timeState == "start") {
        this.formData.sppBeginDate = current(null, this.currentDate);
      } else if (this.timeState == "end") {
        this.formData.sppEndDate = current(null, this.currentDate);
      }
      this.isTimer = false;
    },
    onClickRight() {
      tool.noEmpty(this.formData.sppCheckUserId, "请选择检查人");
      tool.noEmpty(this.formData.sppContent, "请选择检查项");
      tool.noEmpty(this.formData.ipId, "请选择巡检性质");
      tool.noEmpty(this.formData.projectId, "请选择巡检位置");
      tool.noEmpty(this.formData.sppDepartmentId, "请选择巡检部门");
      tool.noEmpty(this.formData.sppNotifier, "请选择通知人");
      banch.addWait(this.formData).then(res => {
        if (res.data.success == 0) {
          this.$toast("新增成功");
          this.$router.push("/wait");
        }
      });
    }
  }
};
</script>
<style  scoped>
.van-cell__value {
  position: relative;
  overflow: hidden;
  color: rgb(43, 137, 226);
  text-align: right;
  vertical-align: middle;
}
.van-cell__label {
  margin-top: 0.06667rem;
  color: rgb(43, 137, 226);
  font-size: 0.3rem;
  line-height: 0.4rem;
}
</style>