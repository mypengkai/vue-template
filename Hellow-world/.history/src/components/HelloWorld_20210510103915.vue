<template>
 
    <van-calendar first-day-of-week="1" />
    <!-- <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" /> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      currentDate: new Date(),
      username: "",
      phone: "",
      message: "哈哈哈",
      list: Object.freeze([{ value: 1 }, { value: 2 }, { value: 3 }]),
      lists: [
        { name: "jay", state: true },
        { name: "ceh", state: true },
        { name: "ddd", state: false },
        { name: "bbq", state: true },
        { name: "liu", state: false },
        { name: "jun", state: true }
      ],
      aa: [1, 2, 4, 9, 4, 6, 8, 2, 0, 1, 9]
    };
  },
  computed: {
    array: function () {
      return this.lists.filter(item => {
        return item.state;
      });
    },
    cc: function () {
      return this.aa.map(item => {
        return item + "jay";
      });
    }
  },
  created() {
    // 长久不变的大数据，可以用Object.freeze()去除Observer监听。使用了Object.freeze()这个方法，更改数据，视图也是会变的。例如如下：
    //this.list[0].value = 100;
    //console.log(this.list);
    //this.list = [];
    //console.log(this.list);
    this.init();
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
