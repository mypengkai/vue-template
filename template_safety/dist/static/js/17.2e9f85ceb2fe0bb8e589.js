webpackJsonp([17],{"1e+c":function(t,e){},Vl5h:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("rMyF"),a={data:function(){return{sendData:{offset:0,limit:1e3},clientList:[]}},created:function(){this.getInit()},methods:{getInit:function(){var t=this;s.a.getPushList(this.sendData).then(function(e){0==e.data.success&&(t.clientList=e.data.rows)})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("van-nav-bar",{attrs:{title:"消息列表",fixed:""}}),t._v(" "),n("van-cell-group",{staticClass:"conent"},t._l(t.clientList,function(e,s){return n("van-cell",{key:s,attrs:{title:"消息通知",icon:"volume-o",label:e.sendMsg},on:{click:function(e){return t.$router.push("/reform")}}})}),1)],1)},staticRenderFns:[]};var c=n("VU/8")(a,i,!1,function(t){n("1e+c")},"data-v-2accbee2",null);e.default=c.exports}});
//# sourceMappingURL=17.2e9f85ceb2fe0bb8e589.js.map