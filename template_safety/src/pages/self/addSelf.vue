<template>
  <div class="addSelf">
    <van-nav-bar
      fixed
      title="新增自主检查"
      left-text="返回"
      right-text="重置"
      left-arrow
      @click-left="$router.back()"
      @click-right="onClickRight"
    />
    <div class="conent">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
      >基础信息</van-divider>
      <ul>
        <li>所属机构：{{ baseObj.departname}}</li>
        <li>所属部门：{{ baseObj.department}}</li>
        <li @click="isProject=true">
          巡检位置：
          <span
            style="border-bottom:2px dashed red;color:rgb(25, 137, 250);"
          >{{ returnValue.projectName || baseObj.projectName}}</span>
        </li>
        <li>检查性质：自检</li>
        <li>检查人：{{baseObj.realname}}</li>
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
        <product v-for="(item,index) in emptyList" :key="index" :list="[item]" :subscript="index"></product>
      </div>
      <van-button icon="plus" round type="info" class="vanButton" size="small" @click="isEmptyCheck"/>
      <van-cell
        title="通知人"
        :label="returnValue.spNotifierName"
        icon="map-marked"
        is-link
        required
        @click="isNotCheck"
      />
      <van-button type="info" size="large" @click="save">保存</van-button>
    </div>
    <!-- 组件 -->
    <!-- 巡检位置 -->
    <van-popup v-model="isProject" position="bottom" :style="{width:'100%',height:'60%'}">
      <project @cancel="isProject=false" @getProject="checkProject"></project>
    </van-popup>
    <!-- 隐患 -->
    <van-popup v-model="isEmpty" position="bottom" :style="{width:'100%',height:'100%'}">
      <empty
        @cancel="isEmpty=false"
        @getEmpty="checKEmpty"
        :id="this.sendData.projectId"
        v-if="flag"
      ></empty>
    </van-popup>
    <!-- 通知人 -->
    <van-popup v-model="isNotify" position="bottom" :style="{width:'100%',height:'100%'}">
      <notify @cancel="isNotify=false" @getNotify="checKNotify" v-if="flag"></notify>
    </van-popup>
  </div>
</template>
<script>
import mine from "@/api/mine";
import tool from "@/units/reg";
import self from "@/api/self";
export default {
  components: {
    project: () => import("@/components/project"),
    product: () => import("@/components/product"),
    empty: () => import("@/components/empty"),
    notify: () => import("@/components/notify")
  },
  inject: ["reload"],
  data() {
    return {
      baseObj: {},
      isProject: false,
      isEmpty: false,
      flag: false,
      isNotify: false,
      emptyList: [], // 选择的隐患数据
      sendData: {
        departId: "", // 部门id
        projectId: "", // 分部分项id
        spCheckUserId: "", // 检查人id
        spNotifier: "", // 通知人id
        result: [], // list数据
      },
      returnValue: {
        projectName: "", // 分布名称
        spNotifierName: "" // 通知人名称
      },
    };
  },
  created() {
    this.sendData.spCheckUserId = this.$store.state.userID;
    this.getUserInit();
  },
  methods: {
    //获取基础信息
    getUserInit() {
      mine.getMine().then(res => {
        if (res.data.success == 0) {
          this.baseObj = res.data.obj;
          this.sendData.departId = res.data.obj.departid;
        }
      });
    },
    checkProject(data) {
      this.sendData.projectId = data.zid;
      this.returnValue.projectName = data.name;
    },
    isEmptyCheck() {
      if (this.sendData.projectId.length == 0) {
        this.$toast("请先选择巡检位置");
        return false;
      };
      this.isEmpty = true;
      this.flag = false;
      this.$nextTick(() => {
        this.flag = true;
      });
    },
    checKEmpty(data) {
      this.emptyList = data;
    },
    isNotCheck() {
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
      this.sendData.spNotifier = notifyId.substring(0, notifyId.length - 1);
      this.returnValue.spNotifierName = notifyName.substring(
        0,
        notifyName.length - 1
      );
    },
    onClickRight() {
      this.reload();
    },
    save() {
      tool.noEmpty(this.sendData.spNotifier,'请选择通知人');
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
.conent span {
  font-size: 0.3rem;
}
.vanRow {
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  border-bottom: 1px solid #ccc;
}
.vanButton {
  display: flex;
  justify-content: center;
  margin: 5px auto;
 
}
.van-button--small {
  min-width: 0.5rem;
  height: 0.66667rem;
  padding: 0 0.17778rem;
  font-size: 0.26667rem;
  line-height: 0.62222rem;
}
.van-cell__label {
  margin-top: 0.06667rem;
  color: #000;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
</style>