<template>
  <div class="reformLoop">
    <van-steps direction="vertical" :active="loopConent.length-1">
      <van-step v-for="(item,index) in loopConent" :key="index">
        <template v-if="item.replayType==0">
          <div class="zgBox">
            <p>整改时间：{{item.replayDateTime}}</p>
            <p>整改人：{{item.replayUserName}}</p>
            <p>整改结果：{{item.replayContent}}</p>
            <p>
              附件：
              <span>
                <viewer :images="item.files2">
                  <img v-for="(src,index) in item.files2" :src="fileURL+src.FilePath" :key="index" />
                </viewer>
              </span>
            </p>
          </div>
        </template>
        <template v-else-if="item.replayType==1">
          <div class="fhBox">
            <p class="first">
              <template v-if="item.replayState==1">
                <img src="../assets/tg.png" alt />
              </template>
              <template v-else-if="item.replayState==2">
                <img src="../assets/wtg.png" alt />
              </template>
            </p>
            <p>复核时间：{{item.replayDateTime}}</p>
            <p>复核人：{{item.replayUserName}}</p>
            <p>复核结果：{{item.replayContent}}</p>
            <p>
              附件：
              <span>
                <viewer :images="item.files2">
                  <img v-for="(src,index) in item.files2" :src="fileURL+src.FilePath" :key="index" />
                </viewer>
              </span>
            </p>
          </div>
        </template>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  props: ["loopConent"],
  data() {
    return {};
  },
  created() {},

  methods: {}
};
</script>
<style  scoped>
img {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.1rem;
}
.zgBox p {
  font-size: 0.3rem;
  color: red;
}
.fhBox p {
  font-size: 0.3rem;
  color: #1989fa;
}
.first {
  position: absolute;
  right: 0.6rem;
}
</style>