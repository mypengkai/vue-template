webpackJsonp([12],{"4D2/":function(t,s){},thVO:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Gwkq"),n={components:{product:function(){return e.e(23).then(e.bind(null,"u+Fy"))}},data:function(){return{sendData:{departId:"",projectId:"",spCheckUserId:"",spNotifier:"",result:[]}}},computed:{sppObj:function(){return this.$store.state.ponitObj},sppList:function(){return this.$store.state.pointList}},methods:{save:function(){var t=this;this.sendData.departId=this.sppObj.sppDepartmentId,this.sendData.projectId=this.sppObj.projectId,this.sendData.spCheckUserId=this.sppObj.sppCheckUserId,this.sendData.spNotifier=this.sppObj.sppNotifier;for(var s=this.$refs.child.children,e=[],n=0;n<s.length;n++)e.push(s[n].__vue__.conentObj);this.sendData.result=e,a.a.addSelf(this.sendData).then(function(s){0==s.data.success&&(t.$toast("新增成功"),t.$router.push("/self"))})}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"startWait"},[e("van-nav-bar",{attrs:{title:"计划检查","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":function(s){return t.$router.back()}}}),t._v(" "),e("div",{staticClass:"conent"},[e("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px",margin:"0"}},[t._v("基础信息")]),t._v(" "),e("ul",[e("li",[t._v("所属部门："+t._s(t.sppObj.sppDepartmentName))]),t._v(" "),e("li",[t._v("巡检位置："+t._s(t.sppObj.projectName))]),t._v(" "),e("li",[t._v("检查性质："+t._s(t.sppObj.ipName))]),t._v(" "),e("li",[t._v("检查人："+t._s(t.sppObj.sppCheckUserName))]),t._v(" "),e("li",[t._v("通知人："+t._s(t.sppObj.sppNotifierName))])]),t._v(" "),e("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px",margin:"0"}},[t._v("巡检内容")]),t._v(" "),e("van-row",{staticClass:"vanRow"},[e("van-col",{attrs:{span:"4"}},[t._v("序号")]),t._v(" "),e("van-col",{attrs:{span:"10"}},[t._v("巡检内容")]),t._v(" "),e("van-col",{attrs:{span:"4"}},[t._v("隐患等级")]),t._v(" "),e("van-col",{attrs:{span:"6"}},[t._v("巡检结果")])],1),t._v(" "),e("div",{ref:"child"},t._l(t.sppList,function(t,s){return e("product",{key:s,attrs:{list:[t],subscript:s}})}),1),t._v(" "),e("van-button",{attrs:{type:"info",size:"large"},on:{click:t.save}},[t._v("保存")])],1)],1)},staticRenderFns:[]};var i=e("VU/8")(n,r,!1,function(t){e("4D2/")},"data-v-80893e3c",null);s.default=i.exports}});
//# sourceMappingURL=12.82b1c98bfebe1d5a6e24.js.map