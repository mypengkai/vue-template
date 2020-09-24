import http from "./request"

export default {
    //待办事项查询
    getWaitList(data) {
        // return http.get(`/Sq_SafetyPatrolPlanController/getList1?offset=${data.offset}&limit=${data.limit}&sppName=${data.sppName}&sppBeginDate=${data.sppBeginDate}&sppEndDate=${data.sppEndDate}&auth=${data.auth}`)
        return http.get('/Sq_SafetyPatrolPlanController/getList1',{data:{
            
        }})
    },
    // 明细
    getWaitDetails(id){
        return http.get(`/Sq_SafetyPatrolPlanController/getEntity/${id}`)
    }
}