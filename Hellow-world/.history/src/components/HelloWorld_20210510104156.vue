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
