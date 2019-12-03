<template>
  <div class="examine">
    <vueGiantTree :nodes="trees" @onClick="nodeClick" :setting="setting"></vueGiantTree>
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
      setting: {
        data: {
          key: {
            name: "name"
          },
          simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pid",
            rootPId: 0
          }
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
      banck.getExamine().then(res => {
        if (res.data.success == 0) {
          this.trees = res.data.rows;
        }
      });
    },
    nodeClick(evt, treeId, treeNode) {
      if (treeNode.children) {
        this.$toast("请选择人员名称");
        return false;
      }
      this.$emit("getExamine",treeNode);
      this.$emit("cancel")
    }
  }
};
</script>
<style  scoped>
.examine {
  padding: 10px;
}
</style>