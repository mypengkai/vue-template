import http from './request'

export default {
     getTrace(params){
          return http.post('/SafetyRectification/list',params)
     },
     getDetail(params){
         return http.post('SafetyRectification/details',params)
     }
}