import http from "./request"

export default{
    //消息推送(传递设备参数)
    getClient(data){
        return http.post("/igexinPush/initClientId",data)
    },
    //获取推送消息列表
    getPushList(data){
        return http.post("/Sq_QualityPatrolPlanController/pushmessage",data)
    }
}