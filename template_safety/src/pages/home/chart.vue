<template>
  <div class="chart">
    <!-- 头部 -->
    <van-nav-bar title="组织机构" />
    <div class="tree">
      <vueGiantTree :nodes="trees" ref="tree" @onCreated="nodeCreated"></vueGiantTree>
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
      trees: []
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
    //初始化渲染完成后触发，回调参数接收ztree实例
    nodeCreated() {
      // 获取所有节点
      let _nodes = this.$refs.tree.ztreeObj.getNodes();
      for (let i = 0; i < _nodes.length; i++) {
        //设置节点展开
        this.$refs.tree.ztreeObj.expandNode(_nodes[i], true, true, true);
      }
    }
  }
};
</script>
<style scoped>
.tree {
  padding: 10px;
}
</style>>
    
