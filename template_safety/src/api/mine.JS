import http from "./request"

export default {
    //获取个人信息
    getMine(){
        return http.get("/main/getUserMessage")
    }
}