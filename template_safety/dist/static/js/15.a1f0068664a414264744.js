webpackJsonp([15],{K0zm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Gu7T"),s=a.n(i),n=a("Gwkq"),o={data:function(){return{selfList:[],noData:!1,loading:!1,finished:!1,formData:{offset:0,limit:10,spCreateDateTime:"",spxjname:"",sprRectificationState:"",isCheck:2,spBeginDate:"",spEndDate:""}}},created:function(){this.getInit()},methods:{getInit:function(){var t=this;n.a.getSelfList(this.formData).then(function(e){0==e.data.success&&(t.loading=!1,0==t.formData.offset?t.selfList=e.data.rows:t.selfList=[].concat(s()(t.selfList),s()(e.data.rows)),t.noData=t.selfList.length==e.data.total)})},onLoad:function(){this.noData?(this.loading=!1,this.finished=!0):(this.formData.offset+=this.formData.limit,this.getInit())},onSearch:function(){this.getInit()},routerDetail:function(t){this.$router.push({path:"/selfDetails",query:{id:t.id,state:t.RectificationState}})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"self"},[a("van-nav-bar",{attrs:{fixed:"",title:"自主检查","left-text":"返回","right-text":"新增","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/work")},"click-right":function(e){return t.$router.push("/addSelf")}}}),t._v(" "),a("div",{staticClass:"conent"},[a("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:t.onSearch},model:{value:t.formData.spxjname,callback:function(e){t.$set(t.formData,"spxjname",e)},expression:"formData.spxjname"}}),t._v(" "),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","van-clearfix":"","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.selfList,function(e,i){return a("ul",{key:i,on:{click:function(a){return t.routerDetail(e)}}},[a("li",{staticClass:"zero"},[t._v(t._s(i+1))]),t._v(" "),a("li",{staticClass:"first"},[a("span",[t._v("巡检名称："+t._s(e.spxjname))]),t._v(" "),-1===e.RectificationState?a("span",{staticStyle:{background:"#464547"}},[t._v("未发整改")]):t._e(),t._v(" "),0===e.RectificationState?a("span",{staticStyle:{background:"#45b97c"}},[t._v("通过")]):t._e(),t._v(" "),1===e.RectificationState?a("span",{staticStyle:{background:"#f26522"}},[t._v("整改中")]):t._e()]),t._v(" "),a("li",[t._v("巡检位置："+t._s(e.projectName))]),t._v(" "),a("li",[t._v("巡检性质："+t._s(e.ipName))]),t._v(" "),a("li",[t._v("检查人："+t._s(e.spCheckUserName))]),t._v(" "),a("li",[t._v("检查时间："+t._s(e.spCreateDateTime))]),t._v(" "),a("li",{staticClass:"six"},[a("span",[t._v("检查总数："+t._s(e.checkCount))]),t._v(" "),a("span",[t._v("安全："+t._s(e.safetyCount)+"项")]),t._v(" "),a("span",[t._v("有隐患："+t._s(e.hiddenCount)+"项")])]),t._v(" "),a("li",[t._v("整改数量/整改完成数量（"+t._s(e.RectificationCount)+"/"+t._s(e.passCount)+"）")])])}),0)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(o,c,!1,function(t){a("dn8s")},"data-v-4769adc7",null);e.default=r.exports},dn8s:function(t,e){}});
//# sourceMappingURL=15.a1f0068664a414264744.js.map