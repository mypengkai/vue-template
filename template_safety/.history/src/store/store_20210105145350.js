import Vue from "vue";
import Vuex from "vuex";
// vuex 数据持久化
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: "",
    userInfo: {}, // 记住登录(账号)
    userID: "", // 登录人id
    userName: "", // 登陆人
    scanObj: {}, // 扫码对象
    pointList: [], // 计划检查项
    ponitObj: {} // 计划基础数据
  },
  mutations: {
    setToken: function(state, token) {
      state.token = token;
    },
    setUserInfo: function(state, userInfo) {
      state.userInfo = userInfo;
    },
    setUserID: function(state, id) {
      state.userID = id;
    },
    setUserName: function(state, name) {
      state.userName = name;
    },
    setScan: function(state, obj) {
      state.scanObj = obj;
    },
    setPointList: function(state, data) {
      state.pointList = data;
    },
    setPointObj: function(state, obj) {
      state.ponitObj = obj;
    }
  }
});

export default store;
