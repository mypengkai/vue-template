import store from "../store/store";
// app 物理退出  首页点击退出app 非首页返回上一页
function goBack() {
  plus.key.addEventListener(
    "backbutton",
    function() {
      let beforeurl = location.hash.split("?")[0];
      let url = beforeurl.split('/')
      if (url == "login" || url == "news" || url == "chart" || url == "mine") {
        plus.nativeUI.confirm(
          "是否退出安全巡检系统?",
          function(e) {
            if (e.index > 0) {
              plus.runtime.quit();
            }
          },
          {
            buttons: ["继续使用", "立即退出"],
            verticalAlign: "center"
          }
        );
      } else if (url == "scan") {
        //清除控件
        let bc = store.state.scanObj;
        bc.close();
        window.history.back();
      } else {
        window.history.back();
      }
    },
    false
  );
}

if (window.plus) {
  goBack();
} else {
  document.addEventListener("plusready", goBack, false);
}
