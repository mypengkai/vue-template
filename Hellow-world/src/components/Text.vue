<template>
  <div>
    <div id="chart" ref="chart"></div>
  </div>
</template>
<script>

import echarts from "echarts";
export default {
  data() {
    return {
      sendData: {
        userGroupId: "", // 组织机构id
        startTime: "",
        endTime: "",
        type: 0
      }
    };
  },
  mounted() {
    this.init();
    this.getData();
  },
  methods: {
   
    init() {
      this.chart = echarts.init(this.$refs.chart); //定义
      var dataMap = {};
      let objPI = {},
        objSI = {},
        objTI = {},
        objES = {};

      let baseData = [];
      let leg = 2;
      function dataFormatter(obj) {
        var pList = ["常祁一标", "常祁二标"];
        var temp;
        for (var j = 0; j < leg; j++) {
          temp = obj[j];
          for (var i = 0, l = temp.length; i < l; i++) {
            obj[j][i] = {
              name: pList[i],
              value: temp[i]
            };
          }
        }
        return obj;
      }

      for (let m = 0; m < leg; m++) {
        this.$set(objPI, m, ["10", "20"]);
        this.$set(objSI, m, ["30", "40"]);
        this.$set(objTI, m, ["50", "60"]);
        this.$set(objES, m, ["70", "80"]);

        baseData.push({
          title: { text: m + "数据" },
          series: [
            { data: objPI[String(m)] },
            { data: objSI[String(m)] },
            { data: objTI[String(m)] },
            { data: objES[String(m)] }
          ]
        });
      }
      console.log(baseData, "baseData");

      dataMap.dataPI = dataFormatter(objPI);
      dataMap.dataSI = dataFormatter(objSI);
      dataMap.dataTI = dataFormatter(objTI);
      dataMap.dataEs = dataFormatter(objES);

      // 多次验收
      // dataMap.dataPI = dataFormatter({
      //   1: [136.27, 159.72],
      //   0: [124.36, 145.58]
      // });

      // 一次合格率
      // dataMap.dataSI = dataFormatter({
      //   1: [3752.48, 5928.32],
      //   0: [3388.38, 4840.23]
      // });

      // 多次合格率
      // dataMap.dataTI = dataFormatter({
      //   1: [12363.18, 5219.24],
      //   0: [10600.84, 4238.65]
      // });

      // 一次验收
      // dataMap.dataEs = dataFormatter({
      //   1: [1074.93, 411.46],
      //   0: [1006.52, 377.59]
      // });

      let option = {
        baseOption: {
          timeline: {
            axisType: "category",
            autoPlay: true,
            playInterval: 1000,
            data: ["2010", "2011"]
          },
          tooltip: {},
          legend: {
            x: "right",
            data: ["一次验收", "多次验收", "一次合格率", "多次合格率"]
          },
          calculable: true,
          grid: {
            top: 80,
            bottom: 100,
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  show: true,
                  formatter: function(params) {
                    return params.value.replace("\n", "");
                  }
                }
              }
            }
          },
          xAxis: [
            {
              type: "category",
              axisLabel: { interval: 0 },
              data: ["常祁一标", "常祁二标"],
              splitLine: { show: false }
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            { name: "一次验收", type: "bar" },
            { name: "多次验收", type: "bar" },
            { name: "一次合格率", type: "bar" },
            { name: "多次合格率", type: "bar" }
          ]
        },
        // options: [
        //   {
        //     title: { text: "2010全国宏观经济指标" },
        //     series: [
        //       { data: dataMap.dataEs["0"] },
        //       { data: dataMap.dataPI["0"] },
        //       { data: dataMap.dataSI["0"] },
        //       { data: dataMap.dataTI["0"] }
        //     ]
        //   },
        //   {
        //     title: { text: "2011全国宏观经济指标" },
        //     series: [
        //       { data: dataMap.dataEs["1"] },
        //       { data: dataMap.dataPI["1"] },
        //       { data: dataMap.dataSI["1"] },
        //       { data: dataMap.dataTI["1"] }
        //     ]
        //   }
        // ]
        options: baseData
      };

      this.chart.setOption(option); //展示
    }
  }
};
</script>
<style lang="">
#chart {
  width: 100%;
  height: 100vh;
}
</style>