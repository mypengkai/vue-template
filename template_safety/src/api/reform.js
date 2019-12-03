import http from "./request"

export default{
    //整改列表
    getReformList(data){
        return http.post("/SafetyRectification/list",data)
    },
    //整改明细
    getReformDetails(data){
        return http.post("/SafetyRectification/details",data)
    },
    //整改复核
    getSelf(data){
        return http.post("SafetyRectification/Reply",data)
    },
    
}