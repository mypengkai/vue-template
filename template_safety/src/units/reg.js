//验证(空字符串)
import { Toast } from 'vant';
const tool = {}
tool.noEmpty = function (str, code) {
    if (str == "" || str == undefined || str == null) {
        Toast(code);   
    }
    return false;
}
export default tool