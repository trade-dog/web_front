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
// const userId = 8;

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
    },
      user: {

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
    this.getHistory();
  },
  watch: {
    target() {
        this.getHistory();

        this.updateChart();
    },
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
          `/chart/candle/${this.target}?startDate=${date[1]}&endDate=${date[0]}`
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

    async getHistory() {
      const date = this.getDate();
      const data = await api.BasicRequest(
        apiUrl +
          `/exchange/${this.user}/order/history?tradePair=${this.target}&startDate=${date[0]}&endDate=${date[1]}`
      );
      const history_data = await api.parseResponse(data.data);
      console.log(history_data.data);
      let history_x = [];
      for (let i of history_data.data.items) {
        if (i["tradePair"] === this.target) {
          // const target_date = new Date(i["createdAt"]).tost
          const buy_bar = {
            // x: new Date(i["createdAt"]).toString(),
            x: i["createdAt"],
            borderColor: i["type"] === "LIMIT_BUY" ? "#FF0059FF" : "#0d41ff",

            label: {
              borderColor: i["type"] === "LIMIT_BUY" ? "#FF0059FF" : "#0d41ff",
              orientation: "horizontal",
              text:
                i["type"] == "LIMIT_SELL"
                  ? `매도`
                  : `매수`,
                style: {
                    color: "#fff",
                    background: i["type"] === "LIMIT_BUY" ? "#FF0059FF" : "#0d41ff",
                }
            }
          };
          history_x.push(buy_bar);
          // console.log(history_x)
        }
      }

        this.options = {
          ...this.options, ...{
              annotations: {
                  xaxis: history_x
              }
            }
        }

    }
  }
};
</script>

<style scoped></style>
