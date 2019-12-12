<template>
  <div class="login">
    <div class="tagImg">
      <img src="../../assets/shtoone.png" alt />
    </div>
    <h5>安全巡检系统</h5>
    <van-cell-group>
      <van-field v-model="sendData.username" required clearable label="用户名" placeholder="请输入用户名" />
      <van-field
        v-model="sendData.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button type="info" size="large" @click="submit">登录</van-button>
    <p>版权@上海同望信息技术有限公司</p>
  </div>
</template>
<script>
import login from "@/api/login";
import tool from "@/units/reg";
import client from "@/api/client";
import { messagePush } from "../../units/push";
export default {
  data() {
    return {
      sendData: {
        username: "",
        password: ""
      }
    };
  },
  created() {
    this.sendData = this.$store.state.userInfo;
  },
  methods: {
    submit() {
      tool.noEmpty(this.sendData.password, "请输入密码");
      tool.noEmpty(this.sendData.username, "请输入用户名");
      login.login(this.sendData).then(res => {
        if (res.data.success == 0) {
          this.$store.commit("setToken", res.data.obj.token);
          this.$store.commit("setUserID", res.data.obj.user.id);
          this.$store.commit("setUserName", res.data.obj.user.realname);
          this.$store.commit("setUserInfo", this.sendData);
          this.$router.push("/");
          this.initClient();
        }
      });
    },
    // 获取本机信息链接后台
    initClient() {
      if (window.plus) {
        messagePush("getClientId", null, null, null, res => {
          client
            .getClient({
              clientId: res.clientid,
              imei: res.imei,
              imsi: res.imsi,
              model: res.model,
              vendor: res.vendor,
              uuid: res.uuid,
              phoneType: res.phoneType
            })
            .then(res => {
              if (res.data.ok) {
                //this.$router.push("/");
              }
            });
        });
      }
    }
  }
};
</script>
<style  scoped>
.login {
  padding: 0.2rem;
}
.tagImg {
  width: 2rem;
  height: 2rem;
  margin: 1rem auto 0.1rem;
}
.tagImg img {
  width: 100%;
  height: 100%;
  display: block;
}
h5 {
  text-align: center;
  font-size: 0.4rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
}

p {
  text-align: center;
  font-size: 0.2rem;
  margin-top: 1rem;
}
</style>