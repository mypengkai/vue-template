
import http from "@/api/request.js"

export default{
    login(params){
        return http.get(`/tokens?username=${params.username}&password=${params.password}`)
    }
}