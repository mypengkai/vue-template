webpackJsonp([20],{0:function(n,e,t){t("j1ja"),n.exports=t("NHnr")},"4ml/":function(n,e){},N1kN:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),i={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[this.isRouterAlive?e("router-view"):this._e()],1)},staticRenderFns:[]};var a=t("VU/8")({name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}}},i,!1,function(n){t("lWxY")},null,null).exports,r=t("YaEn"),l=t("Fd2+"),u=(t("4ml/"),t("wtEF"));function s(){plus.key.addEventListener("backbutton",function(){var n=location.hash.split("/")[1];if("work"==n||"login"==n||"news"==n||"chart"==n||"mine"==n)plus.nativeUI.confirm("是否退出安全巡检系统?",function(n){n.index>0&&plus.runtime.quit()},{buttons:["继续使用","立即退出"],verticalAlign:"center"});else if("scan"==n){u.a.state.scanObj.close(),window.history.back()}else window.history.back()},!1)}window.plus?s():document.addEventListener("plusready",s,!1);var c=t("EAZf"),m=t.n(c);t("N1kN"),t("meh+");o.a.use(l.b),o.a.use(m.a),m.a.setDefaults({Options:{inline:!0,button:!0,navbar:!0,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!0,keyboard:!0,url:"data-source"}}),o.a.config.productionTip=!1,r.a.beforeEach(function(n,e,t){u.a.state.token?t():"/login"!=n.path?t({path:"/login"}):t()}),new o.a({el:"#app",router:r.a,store:u.a,components:{App:a},template:"<App/>"})},YaEn:function(n,e,t){"use strict";var o=t("7+uW"),i=t("/ocq");o.a.use(i.a),e.a=new i.a({routes:[{path:"/login",name:"login",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"QlWu"))}},{path:"/",name:"home",redirect:"/work",component:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"FP3a"))},children:[{path:"work",name:"work",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"MGAM"))}},{path:"/chart",name:"chart",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"hLq1"))}},{path:"mine",name:"mine",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"nGI5"))}},{path:"news",name:"news",component:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"Vl5h"))}}]},{path:"/wait",name:"wait",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"785o"))}},{path:"/addWait",name:"addWait",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"LNai"))}},{path:"/waitDetails",name:"waitDetails",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"CLAu"))}},{path:"/startWait",name:"startWait",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"thVO"))}},{path:"/self",name:"self",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"K0zm"))}},{path:"/addSelf",name:"addSelf",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"GqMT"))}},{path:"/selfDetails",name:"selfDetails",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"Icrw"))}},{path:"/reform",name:"reform",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"1v9/"))}},{path:"/reformDetails",name:"reformDetails",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"1EVJ"))}},{path:"/recheck",name:"recheck",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"2fkP"))}},{path:"/recheckDetails",name:"recheckDetails",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"Ujrm"))}},{path:"/scan",name:"scan",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"ovk9"))}}]})},lWxY:function(n,e){},"meh+":function(n,e){var t,o,i,a,r;t=document,o=window,i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",r=function(){var n=i.clientWidth;n&&(i.style.fontSize=n/750*100+"px")},t.addEventListener&&(o.addEventListener(a,r,!1),t.addEventListener("DOMContentLoaded",r,!1))},wtEF:function(n,e,t){"use strict";var o=t("7+uW"),i=t("NYxO"),a=t("424j");o.a.use(i.a);var r=new i.a.Store({plugins:[Object(a.a)()],state:{token:"",userInfo:{},userID:"",userName:"",scanObj:{},pointList:[],ponitObj:{}},mutations:{setToken:function(n,e){n.token=e},setUserInfo:function(n,e){n.userInfo=e},setUserID:function(n,e){n.userID=e},setUserName:function(n,e){n.userName=e},setScan:function(n,e){n.scanObj=e},setPointList:function(n,e){n.pointList=e},setPointObj:function(n,e){n.ponitObj=e}}});e.a=r}},[0]);
//# sourceMappingURL=app.06c44be88c648cf6909f.js.map