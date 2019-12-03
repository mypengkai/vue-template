
import http from "@/api/request"

export default {
    // 组织机构
    getBanch(){
        return http.get("/main/getDepartment")
    },
    //分布分项
    getProject(){
        return http.get("/ProjectController/getTreeList")
    },
    // 巡检性质
    getKind(){
       return http.get("/Sq_jc_InspectionPropertyController/getInspectionPropertyList")
    },
    //检查项
    getEmpty(id=""){
        return http.get(`/Sq_jc_HiddenDangerController/getListTree1?projectId=${id}`)
    },
    //检查人
    getExamine(){
        return http.get("/main/getUserByDepart")
    },
    //通知人
    getNotify(){
        return http.get("/main/getname")
    },
    // 新增待办事项
    addWait(params){
        return http.post("/Sq_SafetyPatrolPlanController/addSafetyPatrolPlan",params)
    }
}
