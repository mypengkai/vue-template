<template>
  <div class="notify">
    <van-nav-bar fixed title="通知人" left-text="返回" right-text="确定" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div class="tree">
      <vueGiantTree :nodes="trees" @onClick="nodeClick" :setting="setting" ref="tree"></vueGiantTree>
    </div>
  </div>
</template>
<script>
import vueGiantTree from "vue-giant-tree";
import banck from "@/api/banch";
export default {
  components: { vueGiantTree },
  data() {
    return {
      trees: [],
      nodes: [],
      setting: {
        check: {
          enable: true,
          chkStyle: "checkbox",
          chkboxType: { Y: "", N: "" },
          chkDisabledInherit: true
        },
        view: {
          showIcon: false
        }
      }
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      banck.getNotify().then(res => {
        if (res.data.success == 0) {
          this.trees = res.data.obj;
        }
      });
    },
    nodeClick(evt, treeId, treeNode) {
      if (treeNode.children) {
        this.$toast("请选择人员名称");
        return false;
      }
      // 点击数据勾选
      this.$refs.tree.ztreeObj.checkNode(treeNode, !treeNode.checked, false);
      // 获取所有勾选的值
      let _nodes = this.$refs.tree.ztreeObj.getCheckedNodes(true);
      this.nodes = _nodes;
    },
    onClickRight() {
      this.$emit("getNotify", this.nodes);
      this.$emit("cancel")
    },
    onClickLeft() {
      this.$emit("cancel")
    }
  }
};
</script>
<style  scoped>
.tree {
  padding: 10px;
  margin-top: 1rem;
}
</style>