<template>
   <div>
      <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />
   </div>
</template>

<script>
import { Calendar } from 'vant';
export default {
  data() {
    return {
  
    };
  },
  methods: {
    filter(type, options) {
      // console.log(type, "type");
      // console.log(options, "options");
      // if (type === "minute") {
      //   return options.filter(option => option % 5 === 0);
      // }
      if (type === "year") {
        return options.filter(options => (options = new Date().getFullYear));
      }
      return options;
    },
    submit() {
      if (this.username == "") {
        this.message = "请输入用户名";
      } else {
        this.message = "";
      }
    },
    init() {
      let that = this;
      axios.get("../../static/ajax.json").then(
        function (res) {
          // document.write(res.body);
          console.log(res.data.array, "res");
          //that.lists = res.data.array;
        },
        function (err) {
          console.log("请求失败处理");
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
