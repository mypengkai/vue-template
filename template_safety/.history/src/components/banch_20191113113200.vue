<template>
  <div class="banck">
   <vueGiantTree :nodes="trees" @onClick="nodeClick" ></vueGiantTree>
  </div>
</template>
<script>
import banck from "@/api/banch";
import vueGiantTree from "vue-giant-tree";
export default {
  components: { vueGiantTree },
  data() {
    return {
      trees: [], //树形数据源
      
    };
  },
  created() {
    this.initBanch();
  },
  methods: {
    initBanch() {
      banck.getBanch().then(res => {
        if (res.data.success == 0) {
          this.trees = res.data.obj;
        }
      });
    },
    nodeClick(evt, treeId, treeNode) {
      this.$emit("getBanch",treeNode);
      this.$emit("cancel")
    }
  }
};
</script>
<style  scoped>
.banck{
  padding:10px;
}
</style>