<template>
  <div>
    <van-calendar title="日历" :poppable="false" :show-confirm="false" 
    :formatter="formatter" className='calender' >

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
      // const date = this.dateFormat('YYYY-MM-DD', day.date)
      // const today = this.dateFormat('YYYY-MM-DD', new Date())
      // if (date == today) {
      //   day.text = '今天'
      // }
      day.bottomInfo = '¥380'
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
>>>.van-calendar__day {
    position: relative;
    width: 14.285%;
    height: 1.70667rem;
    font-size: 1rem;
    cursor: pointer;
}
.van-calendar__bottom-info,
.van-calendar__top-info {
  position: absolute;
  right: 0;
  left: 0;
  font-size: 0.2rem;
  line-height: 0.37333rem;
}
</style>
