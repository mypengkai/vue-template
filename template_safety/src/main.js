// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import store from "./store/store"
//物理退出
import "@/units/backApp"
//图片预览
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})
import "@/units/rem"

Vue.config.productionTip = false

//路由拦截
router.beforeEach((to, from, next) => {
  if (store.state.token) {
      next()
  } else {
      if (to.path != "/login") {
          next({ path: "/login" })
      } else {
          next()
      }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
