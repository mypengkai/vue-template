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
      console.log(day.date)
      const newDate = new Date()
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
      if (day.date == new Date()) {
        day.text = '今天'
      }
      console.log(new Date())
      return day;
    },
    dataFn() {
    let newDate = new Date()
    let year = newDate.getFullYear()
    let mounth = newDate.getMonth() + 1 > 9 ? `${newDate.getMonth() + 1}` : `0${newDate.getMonth() + 1}`
    let day = newDate.getDate() > 9 ? `${newDate.getDate()}` : `0${newDate.getDate()}`
    var daysInMonth = new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    var vYear = newDate.getFullYear()
    var vMon = newDate.getMonth() + 1
    var vDay = newDate.getDate() //每个月的最后一天日期（为了使用月份便于查找，数组第一位设为0）
    if (vMon == 1) {
      vYear = newDate.getFullYear() - 1
      vMon = 12
    } else {
      vMon = vMon - 1
    } //若是闰年，二月最后一天是29号
    if ((vYear % 4 == 0 && vYear % 100 != 0) || vYear % 400 == 0) {
      daysInMonth[2] = 29
    }
    if (daysInMonth[vMon] < vDay) {
      vDay = daysInMonth[vMon]
    }
    if (vDay < 10) {
      vDay = '0' + vDay
    }
    if (vMon < 10) {
      vMon = '0' + vMon
    }
    var lastdate = vYear + '-' + vMon + '-' + vDay

    var date = year + '-' + mounth + '-' + day

    return {
      startTime: lastdate,
      endTime: date
    }
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
