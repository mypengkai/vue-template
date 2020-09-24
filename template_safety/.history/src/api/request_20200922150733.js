import Vue from "vue"
import axios from "axios"
import store from "@/store/store"
import router from "@/router"
import { Toast } from 'vant';
import getUrl from "./baseUrl"

Vue.prototype.fileURL = getUrl.fileUrl   // 图片地址
const server = axios.create({
    baseURL: getUrl.baseUrl,   // 请求地址
    timeout: 6000,
})

server.interceptors.request.use(config => {
    console.log(config, 'config')
    if (store.state.token) {
        config.headers['X-AUTH-TOKEN'] = store.state.token
    }
    // if (config.method === 'get') {
    //     config.data = {
    //         ...config.data
    //     };
    //     config.params = {
    //         ...config.params
    //     };
    // }
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