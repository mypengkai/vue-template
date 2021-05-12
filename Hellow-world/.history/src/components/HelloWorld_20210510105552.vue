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
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      console.log(date)
    
        day.text = '今天'
      }
      console.log(new Date())
      return day;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
