webpackJsonp([28],{"9SZf":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("nyIb"),s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reformConent"},e._l(e.list,function(t,r){return a("van-cell-group",{key:r},[a("van-cell",{attrs:{label:t.spContent}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-title"},[e._v("安全隐患")]),e._v(" "),a("van-tag",{attrs:{type:"danger"}},[e._v(e._s(t.hdGrade))])],1)],2),e._v(" "),a("van-cell",{attrs:{title:"整改要求",label:t.srContent}}),e._v(" "),a("van-cell",{attrs:{title:"附件"}},[a("template",{slot:"label"},[a("span",[a("viewer",{attrs:{images:t.files}},e._l(t.files,function(t,r){return a("img",{key:r,attrs:{src:e.fileURL+t.FilePath}})}),0)],1)])],2),e._v(" "),a("van-cell",{attrs:{title:"整改完成时间",value:t.srFinishDate}}),e._v(" "),a("van-cell",{attrs:{title:"指定整改人",value:t.srUserName}}),e._v(" "),a("reformLoop",{attrs:{loopConent:t.Reply}}),e._v(" "),e.$store.state.userID==t.srUserId&&0==t.type?a("div",[a("van-cell-group",[a("van-cell",{attrs:{title:"整改说明"}},[a("template",{slot:"label"},[a("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入整改内容"},model:{value:e.sendData.replayContent,callback:function(t){e.$set(e.sendData,"replayContent",t)},expression:"sendData.replayContent"}})],1)],2)],1),e._v(" "),a("Attach",{attrs:{attachList:e.fileList.files,readonly:!1,uploadFileOption:e.fileList.type},on:{uploadCallback:e.getCallback}}),e._v(" "),a("van-button",{attrs:{type:"info",size:"large"},on:{click:e.save}},[e._v("提交保存")])],1):e._e()],1)}),1)},staticRenderFns:[]};var n=function(e){a("h4dh")},l=a("VU/8")(r.a,s,!1,n,"data-v-59e0a6e0",null);t.default=l.exports},Gwkq:function(e,t,a){"use strict";var r=a("l/JR");t.a={getSelfList:function(e){return r.a.post("/NewSafetyPatrolController/searchList",e)},selfDeatil:function(e){return r.a.post("/NewSafetyPatrolController/searchOne",e)},downRectify:function(e){return r.a.post("/SafetyRectification/appointRectification",e)},uploadFile:function(e){return r.a.post("/safetyPatrol/pictureUpload",e)},addSelf:function(e){return r.a.post("/NewSafetyPatrolController/add",e)}}},h4dh:function(e,t){},nyIb:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__api_self__=__webpack_require__("Gwkq"),__WEBPACK_IMPORTED_MODULE_1__api_reform__=__webpack_require__("9lVq");__webpack_exports__.a={props:["list","subscript","id"],components:{reformLoop:function(){return __webpack_require__.e(22).then(__webpack_require__.bind(null,"82ZA"))},Attach:function(){return __webpack_require__.e(21).then(__webpack_require__.bind(null,"w36n"))}},inject:["reload"],data:function(){return{sendData:{id:"",replayUserId:"",replayUserName:"",srId:"",replayType:0,replayState:0,replayContent:"",filesId:""},fileList:{files:[],type:"SafetyReply"}}},methods:{getCallback:function getCallback(data){data=eval("("+data+")"),this.sendData.filesId+=data.obj+","},save:function(){var e=this;if(this.sendData.id=this.id,this.sendData.replayUserId=this.list[0].srUserId,this.sendData.replayUserName=this.list[0].srUserName,this.sendData.srId=this.list[0].srid,0==this.sendData.replayContent.length)return this.$toast("请输入整改内容"),!1;__WEBPACK_IMPORTED_MODULE_1__api_reform__.a.getSelf(this.sendData).then(function(t){0==t.data.success&&(e.$toast("整改成功"),e.reload())})}}}}});
//# sourceMappingURL=28.46f033d3960942d8d52a.js.map