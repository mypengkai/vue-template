webpackJsonp([5],{KVHK:function(e,t,n){e.exports=n.p+"static/img/shtoone.abad818.png"},QlWu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("l/JR"),a=function(e){return s.a.get("/tokens?username="+e.username+"&password="+e.password)},i=n("cN47"),o=n("rMyF"),r=null;function d(e,t,n,s){"create"===e?plus.push.createMessage(t,n,{title:s,icon:"../assets/shtoone.png"}):"remove"===e?plus.push.remove(s,t,n,void 0):"click"===e?plus.push.addEventListener("click",r,!0):"getClientId"===e&&setTimeout(function(){var e=plus.push.getClientInfo(),t={};t.clientid=e.clientid;var n=plus.device.imei;""===n||null===n||void 0===n?n="":n.length>1&&(n=n.split(",")[0]),t.imei=n;var s=plus.device.imsi;s=null===n||0===n.length?"":s[0],t.imsi=s,t.model=plus.device.model,t.vendor=plus.device.vendor;var a=plus.device.uuid;""===a||null===a||void 0===a?a="":a.length>1&&(a=a.split(",")[0]);var i=navigator.userAgent,o=(navigator.appVersion,i.indexOf("Android")>-1||i.indexOf("Linux")>-1),d=!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);t.phoneType=o?"Android":d?"IOS":"",t.uuid=a,r(t)},2e3)}var l={data:function(){return{sendData:{username:"",password:""}}},created:function(){this.sendData=this.$store.state.userInfo},methods:{submit:function(){var e=this;i.a.noEmpty(this.sendData.password,"请输入密码"),i.a.noEmpty(this.sendData.username,"请输入用户名"),a(this.sendData).then(function(t){0==t.data.success&&(e.$store.commit("setToken",t.data.obj.token),e.$store.commit("setUserID",t.data.obj.user.id),e.$store.commit("setUserName",t.data.obj.user.realname),e.$store.commit("setUserInfo",e.sendData),e.$router.push("/"),e.initClient())})},initClient:function(){var e,t,n,s;window.plus&&(e="getClientId",t=null,n=null,s=null,r=function(e){o.a.getClient({clientId:e.clientid,imei:e.imei,imsi:e.imsi,model:e.model,vendor:e.vendor,uuid:e.uuid,phoneType:e.phoneType}).then(function(e){e.data.ok})},window.plus?d(e,t,n,s):document.addEventListener("plusready",d(e,t,n,s),!1))}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[e._m(0),e._v(" "),n("h5",[e._v("安全巡检系统")]),e._v(" "),n("van-cell-group",[n("van-field",{attrs:{required:"",clearable:"",label:"用户名",placeholder:"请输入用户名"},model:{value:e.sendData.username,callback:function(t){e.$set(e.sendData,"username",t)},expression:"sendData.username"}}),e._v(" "),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:e.sendData.password,callback:function(t){e.$set(e.sendData,"password",t)},expression:"sendData.password"}})],1),e._v(" "),n("van-button",{attrs:{type:"info",size:"large"},on:{click:e.submit}},[e._v("登录")]),e._v(" "),n("p",[e._v("版权@上海同望信息技术有限公司")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tagImg"},[t("img",{attrs:{src:n("KVHK"),alt:""}})])}]};var c=n("VU/8")(l,u,!1,function(e){n("v3Hc")},"data-v-1dd7c08e",null);t.default=c.exports},v3Hc:function(e,t){}});