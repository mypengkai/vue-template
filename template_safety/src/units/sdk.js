
//版本更新
import axios from "axios"
import Qs from "qs"
const url = {
    androidAppKey: "b6c1f4ff0c4bfa9003308b697d9228aa",         // app在蒲公英平台的key
    iosAppKey: '37a3f92e6b4ee1abd3e9da3445f0c1a2',
    apikey: "6f64b96f63321b990c95251da589cd58",               // 蒲公英api key
    check: "https://www.pgyer.com/apiv2/app/check"           // 蒲公英更新url
}
function versionready() {
    let buildVersion = plus.runtime.version; // 客户端版本号
    let platform = plus.os.name; // 操作系统名称
    if (platform.toLowerCase() == 'android') {
        axios({
            method: 'post',
            url: url.check,
            data: {
                _api_key: url.apikey,
                appKey: url.androidAppKey,
                buildVersion: buildVersion
            },
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
                return Qs.stringify(data)
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            if (res.data.data.buildHaveNewVersion && res.data.data.buildVersion != buildVersion) {
                plus.nativeUI.confirm("发现新版本" + res.data.data.buildVersion + "，是否立即更新?", function (i) {
                    if (0 == i.index) {
                        plus.nativeUI.toast("正在准备环境，请稍后！");
                        let dtask = plus.downloader.createDownload(res.data.data.downloadURL, {}, function (d, status) {
                            if (status == 200) { // 下载成功
                                var path = d.filename;
                                plus.runtime.install(path); // 安装下载的apk文件
                            } else { //下载失败
                                plus.nativeUI.alert('版本更新失败:' + status);
                            }
                        });
                        dtask.start(); // 启动线程(下载)
                    }
                }, {
                    "buttons": ["立即更新", "暂不更新"],
                    "verticalAlign": "center"
                });
            } else {
                plus.nativeUI.toast("暂无最新版本")
            }
        })
    } else if (platform.toLowerCase() == 'ios') {
        axios({
            method: 'post',
            url: url.check,
            data: {
                _api_key: url.apikey,
                appKey: url.iosAppKey,
                buildVersion: buildVersion
            },
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
                return Qs.stringify(data)
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            if (res.data.data.buildHaveNewVersion && res.data.data.buildVersion != buildVersion) {
                plus.nativeUI.confirm("发现新版本" + res.data.data.buildVersion + "，是否立即更新？", function (i) {
                    if (0 == i.index) {
                        plus.runtime.openURL(res.data.data.downloadURL);
                    } else{
                        plus.nativeUI.alert('版本更新失败:' + status);
                    }
                }, {
                    "buttons": ["立即更新", "暂不更新"],
                    "verticalAlign": "center"
                });
            } else {
                plus.nativeUI.toast("暂无最新版本")
            }
        })

    }
}



export const checkVersion = () => {
    if (window.plus) {
        versionready();
    } else {
        document.addEventListener('plusready', versionready, false);
    }
}
