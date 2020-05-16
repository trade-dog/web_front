<template>
  <div>
    <nav-bar></nav-bar>
    <div class="flex-container content-area" id="box">
      <div class="top-title">
        <span class="name">
          {{ name }}
        </span>
        <span class="top-grey">
          님의 포트폴리오
        </span>
        <span class="tags">
          <span class="tags-item" v-for="tag in tags" v-bind:key="tag">
            # {{ tag }}
          </span>
        </span>

          <button class="button" id="follow-button" v-on:click="follow_click">{{ follow_text }}</button>

      </div>
      <div class="flex-container">
        <card id="basic_info">
          <div class="info_contents">
            <div class="CardTitle">기본정보</div>
            <div class="basic_contents">
              <div class="CardContents">
                <div class="row">
                  <span class="ContentText">수익률</span>
                  <span class="FlexArea">
                    <span class="RateVal"> {{ summaryRate }} </span>
                    <span class="expectMoneyVal counter">%</span>
                  </span>
                </div>
                <div class="row">
                  <span class="ContentText">평가금액</span>
                  <span class="FlexArea">
                    <span class="expectMoneyVal"> {{ balance }} </span>
                    <span class="expectMoneyVal counter">KRW</span>
                  </span>
                </div>
              </div>
              <div id="chartContainer">
                <doughnut
                  v-if="this.assetChart.loaded"
                  :chart-data="this.assetChart.chartdata"
                  :options="this.assetChart.chartOptions"
                ></doughnut>
              </div>
            </div>
          </div>
        </card>
        <card id="follower_info">
          <div class="info_contents">
            <div class="CardTitle">팔로워 정보</div>
            <div class="follower-contents">
              <div class="CardContents">
                <div class="row">
                  <span class="ContentText">팔로워 수</span>
                  <span class="FlexArea">
                    <span class="RateVal"> {{ followerNum }} </span>
                    <span class="expectMoneyVal counter">명</span>
                  </span>
                </div>
              </div>
              <div>
                <bar
                  id="followerChart_container"
                  v-if="this.followerChart.loaded"
                  :chart-data="this.followerChart.chartdata"
                  :options="this.followerChart.chartOptions"
                ></bar>
              </div>
            </div>
          </div>
        </card>
      </div>
    </div>
    <grey-background>
      <div class="flex-container content-area">
        <p class="personal_text">
          {{ introduce }}
        </p>
      </div>
    </grey-background>
    <div class="table_area content-area">
      <vue-good-table :columns="columns" :rows="rows" />
    </div>
    <div class="chart-area">
      <div class="content-area">
        <select v-model="selected">
          <option
            :key="option.text"
            v-for="option in options"
            :value="option.value"
            >{{ option.text }}</option
          >
        </select>
      </div>
      <div class="content-area">
        <candle-stick :target="selected"></candle-stick>
      </div>
    </div>
    <grey-background>
      <div class="content-area">
        <foot> </foot>
      </div>
    </grey-background>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Card from "./Card";
import bar from "./Bar";
import doughnut from "./Doughnt";
import GreyBackground from "./GreyBackground";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import CandleStick from "./CandleStick";
import foot from "./footer";
import api from "./api";
// const apiUrl = "https://a4a5e218-ec75-497b-9db0-ea32fce2e309.mock.pstmn.io";
const apiUrl = "http://api.trd-dog.jadekim.kr";

export default {
  name: "portfolio",
  components: {
    CandleStick,
    GreyBackground,
    NavBar,
    Card,
    bar,
    doughnut,
    VueGoodTable,
    foot
  },

  methods: {
    async getTag() {
      const data = await api.BasicRequest(apiUrl + "/user");
      const user_data = await api.parseResponse(data.data);
      const user = user_data["data"];
      this.tags = user["tag"];
    },

    async getFollowerNum() {
      const data = await api.BasicRequest(apiUrl + "/user/1/follower/count");
      const follower_data = await api.parseResponse(data.data);
      this.followerNum = follower_data["data"];
    },

    async getUserBalance() {
      const data = await api.BasicRequest(apiUrl + "/balance/evaluated");
      const balance_data = await api.parseResponse(data.data);
      this.balance = balance_data["data"];
    },

    async getSummaryRate() {
      const data = await api.BasicRequest(apiUrl + "/statistic/1/summary");
      const summary_data = await api.parseResponse(data.data);
      const summary = summary_data["data"];
      this.summaryRate = summary["returnRate"];
      // need doughnut
    },

    async getIntroduce() {
      const data = await api.BasicRequest(apiUrl + "/user/1/introduction");
      const intro_data = await api.parseResponse(data.data);
      this.introduce = intro_data["data"];
    },

    async getStatus() {
      const data = await api.BasicRequest(apiUrl + "/statistic/1/state");
      const state_data = await api.parseResponse(data.data);
      const state_list = state_data["data"];
      // need status table
      //
      // state_list.forEach(function(item,index) {
      //   console.log(item,index);
      // });
    },

    milToDate(milsec) {
      let date = new Date(milsec);
      return date.toLocaleDateString("ko-kr");
    },
    getDate() {
      const date = new Date();
      const now = Date.now();
      const month_ago = date.setMonth(date.getMonth() - 1);
      return [now, month_ago];
    },

    async getFollowerInfo() {
      const date = this.getDate();
      const data = await api.BasicRequest(
        apiUrl +
          `/user/1/follower/count/snapshot/1d?startDate=${date[0]}&endDate=${date[1]}`
      );
      const chart_data = await api.parseResponse(data.data);
      // console.log(chart_data.data.items);
      const y_axis = chart_data.data.items.map(v => v.value);
      const x_axis = chart_data.data.items.map(v => this.milToDate(v.time));
      let chartData = {
        labels: x_axis,
        datasets: [
          {
            data: y_axis,
            backgroundColor: "rgba(88, 215, 255, 0.18)"
          }
        ]
      };
      this.followerChart.loaded = true;
      this.followerChart.chartdata = chartData;
    },

    async getAssetInfo() {
      const data = await api.BasicRequest(apiUrl + "/statistic/1/summary");
      const asset_data = await api.parseResponse(data.data);
      console.log(asset_data.data.ratio);
      const coins = new Map(Object.entries(asset_data.data.ratio));
      // console.log(coins.values())

      console.log(Array.from(coins.values()));
      let chartData = {
        labels: Array.from(coins.keys()),
        datasets: [
          {
            label: "GitHub Commits",
            data: Array.from(coins.values()),
            backgroundColor: [
              "rgba(163,160,251,1)",
              "rgba(255,218,131,1)",
              "rgba(255,131,115,1)",
              "rgba(85,216,254,1)"
            ]
          }
        ]
      };

      //candleStick 차트 옵션 Select 값을 만들어 주는 부분
      for (let i of Array.from(coins.keys())) {
        // console.log("this is : " + i)
        this.options.push({ text: i, value: i + "-KRW" });
      }
      this.selected = Array.from(coins.keys())[0] + "-KRW";

      this.assetChart.loaded = true;
      this.assetChart.chartdata = chartData;
    },

      follow_click(){
        let status = this.follow_status
          if (status == -1){
              this.follow_status = this.follow_status * -1
              this.followerNum += 1
              this.follow_text = "언팔로우"
          } else {
              this.follow_status = this.follow_status * -1
              this.followerNum -= 1
              this.follow_text = "팔로우"
          }
      }
  },

  created() {
    this.getTag();
    this.getUserBalance();
    this.getSummaryRate();
    this.getFollowerNum();
    this.getIntroduce();
  },

  data() {
    return {
      balance: "",
      summaryRate: "",
      followerNum: "",
      introduce: "",
      follow_status: -1,
      follow_text: "팔로우",
      name: "코인투",
      tags: "",
      columns: [
        {
          label: "코인명",
          field: "coin_name"
        },
        {
          label: "자산비중",
          field: "asset_ratio"
        },
        {
          label: "수익률",
          field: "earn_ratio"
        },
        {
          label: "미체결 매수주문(최고/최저)",
          field: "active_order"
        },
        {
          label: "미체결 매도주문(최고/최저)",
          field: "active_ask"
        },
        {
          label: "최근1년 매수횟수",
          field: "recent_order"
        },
        {
          label: "최근1년 매도회수",
          field: "recent_ask"
        }
      ],

      rows: "",
      // rows: [
      //   {
      //     id: 1,
      //     coin_name: "John",
      //     asset_ratio: 20,
      //     earn_ratio: 1.246,
      //     active_order: 0.03343,
      //     active_ask: 1234,
      //     recent_order: 1234,
      //     recent_ask: 4321
      //   },
      //   {
      //     id: 2,
      //     coin_name: "Jane",
      //     asset_ratio: 24,
      //     earn_ratio: 1234,
      //     active_order: 0.03343,
      //     active_ask: 1234,
      //     recent_order: 1234,
      //     recent_ask: 4321
      //   },
      //   {
      //     id: 3,
      //     coin_name: "Susan",
      //     asset_ratio: 16,
      //     earn_ratio: 1345,
      //     active_order: 0.03343,
      //     active_ask: 1234,
      //     recent_order: 1234,
      //     recent_ask: 4321
      //   }
      // ]
      followerChart: {
        loaded: false,
        chartdata: null,
        chartOptions: {
          legend: {
            display: false
          },
          borderSkipped: ["bottom", "left"],
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                display: false,
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                display: false,
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
      },
      assetChart: {
        loaded: false,
        chartData: null,
        chartOptions: {
          legend: {
            position: "right",
            labels: {
              boxWidth: 15,
              fontFamily: "Spoqa Han Sans"
            }
          }
        }
      },
      options: [],
      selected: "COIN"
    };
  },

  mounted() {
    this.getAssetInfo();
    this.getFollowerInfo();

  },

};
</script>

<style scoped>
#box {
  flex-direction: column;
}

.flex-container {
  display: flex;
  margin: auto;
  padding: 2em 0;
}

.content-area {
  width: 1200px;
  justify-content: space-between;
  margin: auto;
}

.top-title {
  color: black;
  font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Noto Sans KR",
    "Sans-serif";
  font-weight: bold;
}

.name {
  color: rgb(40, 85, 154);

  font-size: 2em;
  font-weight: bold;
}

.top-grey {
  color: rgb(174, 181, 193);
  font-size: 1em;
}

.tags {
  margin-left: 2em;
  color: rgb(0, 89, 255);
  font-size: 1.5em;
}

.tags-item {
  margin-left: 0.5em;
}

#basic_info {
  display: flex;
  flex: 2.5;
  width: 810px;
  height: 15em;
  margin-right: 1em;
  margin-left: 50px;
}

.info_contents {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

#follower_info {
  flex: 1.4;
  width: 320px;
  height: 15em;
  margin-left: 1em;
  margin-right: 50px;
}
.basic_contents {
  display: flex;
}

.CardTitle {
  color: rgba(77, 79, 92, 0.61);
  position: relative;
  top: 1em;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.CardContents {
  color: #4d4f5c;
  width: 25rem;
  position: relative;
  top: 3em;
  margin-left: 2em;
  font-size: 1.2em;
  font-weight: bold;
}

.ContentText {
  /*내 수익률*/
  width: 40%;
}

.RateVal {
  /*+24*/
  color: red;
}

.FlexArea {
  display: inline-flex;
  width: 30%;
  justify-content: flex-end;
}
.expectMoneyVal {
  /*% 및 123,456 KRW */
  color: #333333;
}
.counter {
  margin-left: 0.5rem;
}
.row {
  display: flex;
  margin-bottom: 2rem;
}

.follower-contents {
  display: flex;
  flex-direction: column;
}

#chartContainer {
  position: relative;
  max-width: 13rem;
}

#followerChart_container {
  position: relative;
  top: 4em;
  width: 100%;
  height: 5em;
}
.personal_text {
  font-size: 1.3em;
  line-height: 2em;
}
.table_area {
  margin-top: 3em;
  margin-bottom: 3em;
}
.chart-area {
  height: 300px;
  margin-bottom: 5em;
}

  #follow-button {
    background-color: rgb(0, 89, 255);
    color: white;
    font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
    border: none;
    vertical-align: baseline;
    margin-left: 37em;
  }

.button {
  border: solid 1px rgb(67, 66, 93);
  border-radius: 4px;
  width: 5em;
  height: 2em;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
  "Sans-serif";
}
</style>
