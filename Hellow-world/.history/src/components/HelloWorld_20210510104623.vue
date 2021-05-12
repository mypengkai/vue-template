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
    formatter(dat)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
