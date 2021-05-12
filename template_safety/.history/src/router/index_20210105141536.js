import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login/login")
    },
    {
      path: "/",
      name: "home",
      redirect: "/work",
      component: () => import("@/pages/home/index"),
      children: [
        {
          path: "/work",
          name: "work",
          component: () => import("@/pages/home/work")
        },
        //组织机构
        {
          path: "/chart",
          name: "chart",
          component: () => import("@/pages/home/chart")
        },
        //我(信息)
        {
          path: "/mine",
          name: "mine",
          component: () => import("@/pages/home/mine")
        },
        //消息
        {
          path: "/news",
          name: "news",
          component: () => import("@/pages/home/news")
        }
      ]
    },
    // 待办事项
    {
      path: "/wait",
      name: "wait",
      component: () => import("@/pages/wait/index")
    },
    {
      path: "/addWait",
      name: "addWait",
      component: () => import("@/pages/wait/addWait")
    },
    {
      path: "/waitDetails",
      name: "waitDetails",
      component: () => import("@/pages/wait/waitDetails")
    },
    {
      path: "/startWait",
      name: "startWait",
      component: () => import("@/pages/wait/startWait")
    },
    //自主检查
    {
      path: "/self",
      name: "self",
      component: () => import("@/pages/self/index")
    },
    {
      path: "/addSelf",
      name: "addSelf",
      component: () => import("@/pages/self/addSelf")
    },
    {
      path: "/selfDetails",
      name: "selfDetails",
      component: () => import("@/pages/self/selfDetails")
    },
    //整改
    {
      path: "/reform",
      name: "reform",
      component: () => import("@/pages/reform/index")
    },
    {
      path: "/reformDetails",
      name: "reformDetails",
      component: () => import("@/pages/reform/reformDetails")
    },
    //复核
    {
      path: "/recheck",
      name: "recheck",
      component: () => import("@/pages/recheck/index")
    },
    {
      path: "/recheckDetails",
      name: "recheckDetails",
      component: () => import("@/pages/recheck/recheckDetails")
    },
    //痕迹
    {
      path: "/trace",
      name: "trace",
      component: () => import("@/pages/trace/index")
    },
    {
      path: "/traceDetail",
      name: "traceDetail",
      component: () => import("@/pages/trace/traceDetail")
    },
    // 扫一扫
    {
      path: "/scan",
      name: "scan",
      component: () => import("@/pages/scan/scan")
    }
  ]
});
