<template>
  <div class="reformDetails">
    <van-nav-bar fixed title="隐患整改" left-text="返回" left-arrow @click-left="$router.back()" />
    <div class="conent">
      <div class="base">
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
        >基础信息</van-divider>
        <ul>
          <li>巡检名称：{{baseObj.spxjname}}</li>
          <li>所属机构：{{baseObj.departname}}</li>
          <li>所属部门：{{baseObj.CheckUserdepartment}}</li>
          <li>巡检位置：{{baseObj.projectName}}</li>
          <li>检查人：{{baseObj.spCheckUserName}}</li>
          <li>检查时间：{{baseObj.spCreateDateTime}}</li>
          <li>通知人：{{baseObj.spNotifierName}}</li>
        </ul>
      </div>
       <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px',margin:'0' }"
        >整改内容</van-divider>
        <div class="child">
             <reformConent v-for="(item,index) in conentList" :key="index" :list="[item]" :subscript="index" :id="baseObj.spid"></reformConent>
        </div>
    </div>
  </div>
</template>
<script>
import reform from "@/api/reform"
export default {
  components:{
    reformConent:()=>import("@/components/reformConent")
  },
  data() {
    return {
        baseObj:{},
        id:this.$route.query.id,
        conentList:[],
        
    };
  },
  created() {
      this.getInit();
  },
  methods:{
      getInit(){
          reform.getReformDetails({id:this.id}).then(res=>{
               if(res.data.success==0){
                   this.baseObj = res.data.obj;
                   this.conentList = res.data.rows;
               }
          })
      }
  }
};
</script>
<style scoped>
.reformDetails {
  background: #efeff4;
  height: 100%;
}
.conent {
  margin-top: 46px;
}
.base ul {
  background: #fff;
  padding: 0.2rem 0.5rem;
}
.base li {
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.van-nav-bar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10 !important;
}

</style>