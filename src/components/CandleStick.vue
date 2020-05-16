<template>
  <vue-apex-charts
    :height="300"
    :options="options"
    :series="series"
  ></vue-apex-charts>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import api from "./api";
const apiUrl = "http://api.trd-dog.jadekim.kr";

export default {
  name: "CandleStick",
  components: {
    VueApexCharts
  },
  props: {
    target: {
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {
      options: {
        chart: {
          type: "candlestick",
          id: "vuechart-example"
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },
        annotations: {
          xaxis: [
            {
              x: new Date(1574035200000).getTime(),
              borderColor: "#775DD0",
              label: {
                style: {
                  color: "#775DD0"
                },
              }
            }
          ]
        }
      },
      series: [
        {
          data: []
        }
      ],
      plotOptions: {
        candlestick: {
          wick: {
            useFillColor: true
          } // 텍스트로 매수인지 매도인지 표현 가능하도록.
        }
      }
    };
  },
  created() {

  },
  watch: {
    target() {
      this.updateChart();
      this.getHistory();
    }
  },
  methods: {
    getDate() {
      const date = new Date();
      const now = Date.now();
      const month_ago = date.setMonth(date.getMonth() - 1);
      return [now, month_ago];
    },
    async updateChart() {
      const date = this.getDate();
      const data = await api.BasicRequest(
        apiUrl +
          `/chart/candle/${this.target}?startDate=${date[0]}&endDate=${date[1]}`
      );
      const candle_Data = await api.parseResponse(data.data);
      // console.log(candle_Data.data.items)
      let chart_data = [];
      for (let i of candle_Data.data.items) {
        let tmp = {
          x: new Date(i["time"]),
          y: [i["open"], i["high"], i["low"], i["close"]]
        };
        chart_data.push(tmp);
      }

      this.series = [
        {
          data: chart_data
        }
      ];
    },

      async getHistory(){
          const date = this.getDate();
          const data = await api.BasicRequest(
              apiUrl +
              `/exchange/1/order/history?tradePair=${this.target}&startDate=${date[0]}&endDate=${date[1]}`
          );
          const history_data = await api.parseResponse(data.data);
          console.log(history_data)
      }
  }
};
</script>

<style scoped></style>
