import Vue from "vue"
import axios from "axios"
import store from "@/store/store"
import router from "@/router"
import { Toast } from 'vant';


 Vue.prototype.fileURL = 'http://114.55.94.198:8084/SafetyQualityPatrolNew/img/server/'   // 图片地址
const server = axios.create({
    baseURL: "http://114.55.94.198:8084/SafetyQualityPatrolNew/rest",   // 请求地址
    // baseURL:"http://192.168.10.28:8081/CATDPS/rest",
    timeout: 6000,
})

server.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers['X-AUTH-TOKEN'] = store.state.token
    }
    if (config.method === 'get') {
        config.data = {
            // unused: 0
            ...config.data
        } // 这个是关键点，加入这行就可以了
        config.params = {
            ...config.params
        }
      
        
    }
    return config
}, error => {
    Toast("请求超时")
    return Promise.reject(error);
   
})


// 拦截器 在请求之后拦截
server.interceptors.response.use(response => {
    let data = response.data.success;
    switch (data) {
        case "0":
            break;
        case "1":
            break;
        case "-3":
            store.commit("setToken", null);
            router.push("/login");
            break;
    }
    return response
}, error => {
    Toast("请求失败")
    return Promise.reject(error);
})

export default server