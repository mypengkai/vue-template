webpackJsonp([13],{VsZa:function(t,e){},ovk9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("l/JR"),i=function(t){return n.a.post("/sq_SafetyMeetingController/Check",t)},s=null,c={data:function(){return{active:"scan",signObj:{userid:"",meetingid:""}}},created:function(){this.signObj.userid=this.$store.state.userID},mounted:function(){this.startRecognize()},methods:{startRecognize:function(){window.plus&&(s=new plus.barcode.Barcode("bcid",[plus.barcode.QR,plus.barcode.EAN8,plus.barcode.EAN13],{frameColor:"#009DE2",scanbarColor:"#009DE2"}),this.$store.commit("setScan",s),s.start(),s.onmarked=this.onmarked)},closeScan:function(){window.plus&&(s.close(),this.$router.push({path:"/work"}))},onmarked:function(t,e,a){switch(t){case plus.barcode.QR:t="QR";break;case plus.barcode.EAN13:t="EAN13";break;case plus.barcode.EAN8:t="EAN8";break;default:t="其它"+t}this.signObj.meetingid=e,this.initScan(),this.closeScan()},scanImg:function(){var t=this;window.plus&&plus.gallery.pick(function(e){plus.barcode.scan(e,function(e,a,n){t.signObj.meetingid=a,t.initScan(),t.closeScan()},function(t){plus.nativeUI.alert("没有可识别的二维码")})},function(t){throw t},{filter:"image"})},initScan:function(){var t=this;i(this.signObj).then(function(e){0==e.data.success?t.$toast("签到成功"):t.$toast(e.data.msg)})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scan"},[a("van-nav-bar",{attrs:{title:"扫码签到","left-text":"返回","left-arrow":""},on:{"click-left":t.closeScan}}),t._v(" "),t._m(0),t._v(" "),a("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{name:"scan",icon:"scan"}},[t._v("扫一扫")]),t._v(" "),a("van-tabbar-item",{attrs:{name:"paid",icon:"paid"},on:{click:t.scanImg}},[t._v("相册")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"bcid"}},[e("div",{staticStyle:{width:"100%",height:"40%","background-color":"#fff",margin:"15% auto 5%","text-align":"center"}}),this._v(" "),e("p",{staticClass:"tip",staticStyle:{"text-align":"center"}},[this._v("...载入中...")])])}]};var o=a("VU/8")(c,r,!1,function(t){a("VsZa")},"data-v-b2a8c870",null);e.default=o.exports}});