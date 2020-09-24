import http from "./request"

export default {
    //待办事项查询
    getWaitList(data = {}) {

        return http.get('/Sq_SafetyPatrolPlanController/getList1', {
            params: data
        })

    },
    // 明细
    getWaitDetails(id) {
        return http.get(`/Sq_SafetyPatrolPlanController/getEntity/${id}`)
    }
}