<template>
  <div class="kind">
    <vueGiantTree :nodes="trees" @onClick="nodeClick" :setting="setting"></vueGiantTree>
  </div>
</template>
<script>
import vueGiantTree from "vue-giant-tree";
import banck from "@/api/banch";
//import filterTree from "@/units/trees";
export default {
  components: { vueGiantTree },
  data() {
    return {
      trees: [], //树形数据源
      setting: {
        data: {
          key: {
            name: "ipName"
          },
          simpleData: {
            enable: true,
            idKey: "ipCode",
            pIdKey: "ipParentCode",
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
    this.initKind();
  },
  methods: {
    initKind() {
      banck.getKind().then(res => {
        if (res.data.success == 0) {
          this.trees = res.data.rows;
        }
      });
    },
    nodeClick(evt, treeId, treeNode) {
      this.$emit("getKind", treeNode);
      this.$emit("cancel");
    }
  }
};
</script>
<style  scoped>
.kind {
  padding: 10px;
}
</style>