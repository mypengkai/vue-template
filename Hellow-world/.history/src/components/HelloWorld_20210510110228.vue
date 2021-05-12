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
     
      var date = year + '-' + mounth + '-' + day

      return date
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
