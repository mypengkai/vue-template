import http from "./request"
export default {
    getScan(data) {
        return http.post("/sq_SafetyMeetingController/Check", data)
    }
}