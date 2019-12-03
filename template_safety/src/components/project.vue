<template>
    <div class="project">
          <vueGiantTree :nodes="trees" @onClick="nodeClick" ></vueGiantTree>
    </div>
</template>
<script>
import banch from "@/api/banch"
import vueGiantTree from "vue-giant-tree";
export default {
     components: { vueGiantTree },
    data(){
        return{
           trees:[]
        }
    },
    created() {
        this.getInit()
    },
    methods:{
        getInit(){
            banch.getProject().then(res=>{
                if(res.data.success==0){
                  this.trees = res.data.obj;
                }
            })
        },
        nodeClick(evt, treeId, treeNode){
           if(treeNode.children){
               this.$toast("巡检位置请选最下级")
               return false
           }
           this.$emit("getProject",treeNode);
           this.$emit("cancel")
        }
    }
}
</script>
<style  scoped>
.project{
    padding: 10px;
}
</style>