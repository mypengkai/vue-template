
import http from "./request"
export default {
      // 自检查询
    getSelfList(data){
        return http.post("/NewSafetyPatrolController/searchList",data)
    },
    // 自检明细
    selfDeatil(data){
        return http.post("/NewSafetyPatrolController/searchOne",data)
    },
    //下发整改单
    downRectify(data){
        return http.post("/SafetyRectification/appointRectification",data)
    },
    //文件上传
    uploadFile(data){
        return http.post("/safetyPatrol/pictureUpload",data)
    },
    //自检新增
    addSelf(data){
        return http.post("/NewSafetyPatrolController/add",data)
    }
}