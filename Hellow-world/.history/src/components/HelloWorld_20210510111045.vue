<template>
  <div>
    <van-calendar title="日历" :poppable="false" :show-confirm="false" :formatter="formatter">

    </van-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    formatter(day) {
      console.log(day)
      const da = this.dateFormat('YYYY-MM-DD',day.date)
      // const month = day.date.getMonth() + 1;
      // const date = day.date.getDate();
      // console.log(date)
      // if (month === 5) {
      //   if (date === 1) {
      //     day.bottomInfo = '劳动节';
      //   } else if (date === 4) {
      //     day.bottomInfo = '青年节';
      //   }
      // }
      console.log(new Date())
      return day;
    },
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "M+": (date.getMonth() + 1).toString(),     // 月
        "D+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "m+": date.getMinutes().toString(),         // 分
        "s+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
      };
      return fmt;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
