<template>
  <div>
    <nav-bar></nav-bar>
    <grey-background>
      <div class="flex-container content-area">
        <card id="basic_info">
          <div class="info_contents">
            <div class="CardTitle">기본정보</div>
            <div class="basic_contents">
              <div class="CardContents">
                <div class="row">
                  <span class="ContentText">내 수익률</span>
                  <span class="FlexArea">
                    <span class="RateVal"> +24</span>
                    <span class="expectMoneyVal counter">%</span>
                  </span>
                </div>
                <div class="row">
                  <span class="ContentText">평가금액</span>
                  <span class="FlexArea">
                    <span class="expectMoneyVal"> {{ userBalance }}</span>
                    <span class="expectMoneyVal counter">KRW</span>
                  </span>
                </div>
              </div>
              <div id="chartContainer">
                <doughnut
                  v-if="this.followerChart.loaded"
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
                  <span class="ContentText">내 팔로워 수</span>
                  <span class="FlexArea">
                    <span class="RateVal"> 512</span>
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
    </grey-background>
    <div class=" content-area">
      <div class="trend-kind">
        <span class="trend-kind-big">팔로우 트렌드</span>
        <span class="trend-kind-small">수익률 TOP10</span>
      </div>
      <div class="flex-container trend-wrapper">
        <trend-card
          class="trend"
          :key="trendData.id"
          v-for="trendData in trendData"
          :trendData="trendData"
        ></trend-card>
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
import GreyBackground from "./GreyBackground";
import Card from "./Card";
import TrendCard from "./TrendCard";
import doughnut from "./Doughnt";
import bar from "./Bar";
import foot from "./footer";
import api from "./api";

//const apiUrl = "http://api.trd-dog.jadekim.kr";
const apiUrl = "https://db8bfc1f-f0ec-415c-8562-c5ecc9ec2dd7.mock.pstmn.io";

export default {
  name: "Home",
  components: {
    doughnut,
    bar,
    TrendCard,
    "nav-bar": NavBar,
    "grey-background": GreyBackground,
    card: Card,
    foot
  },
  methods: {
    async getUserInfo() {
      const data = await api.BasicRequest(
        apiUrl + "/user"
      );
      const user_data = await api.parseResponse(data.data);
      console.log(user_data);
      this.userid = user_data["userId"];
      this.nickname = user_data["nickname"];
      this.tag = user_data["tag"];
      this.followerCount = user_data["followerCount"];
      this.returnRate = user_data["returnRate"];
      this.ratio = user_data["ratio"];
    },

    async getuserBalance() {
      const data = await api.BasicRequest(
        apiUrl + "/balance/evaluated"
      );
      const user_balance = await api.parseResponse(data.data);
      this.userBalance = user_balance["data"];
      console.log(user_balance);
    },

    milToDate(milsec) {
      let date = new Date(milsec);
      return date.toLocaleDateString("ko-kr");
    },

    async getFollowerInfo() {
      const data = await api.BasicRequest(
        apiUrl + "/user/1/follower/count/snapshot/1d"
      );
      const chart_data = await api.parseResponse(data.data);
      console.log(chart_data.data.items);
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
      const data = await api.BasicRequest(
        apiUrl + "/statistic/summary"
      );
      const asset_data = await api.parseResponse(data.data);
      console.log(asset_data.data.ratio);

      const coins = new Map(Object.entries(asset_data.data.ratio));
      // console.log(coins.values())

      let chartData = {
        labels: Array.from(coins.keys()),
        datasets: [
          {
            label: "Coins",
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

      this.assetChart.loaded = true;
      this.assetChart.chartdata = chartData;
    },

    async getTrendData() {
      const data = await api.BasicRequest(apiUrl + "/trend/return-rate");
      const trend_data = await api.parseResponse(data.data);
      const trend = trend_data['data'];
      const trendlist = trend['items'];
      const trendrow = [];

      trendlist.forEach(function(item,index){
        const trend_content = {};
        trend_content.id = index;
        trend_content.name = item.nickname;
        trend_content.follower = item.followerCount;
        trend_content.tags = item.tag;
        trend_content.earn_rate = item.returnRate;
        trend_content.asset_rate = item.ratio;
        trendrow.push(trend_content);
      });
      console.log(trendrow);
      this.trendData = trendrow;
    }
  },
  mounted() {
    // this.getAssetInfo();
    // this.getuserBalance();
    // this.getUserInfo();
    // this.getFollowerInfo();
    this.getTrendData();
  },

  data() {
    return {
      userData: {
        userid: "",
        nickname: "",
        tag: [],
        followerCount: "",
        ratio: ""
      },

      userBalance: "",

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

      trendData: ""
      // trendData: [
      //   {
      //     id: 1,
      //     name: "minsoo",
      //     follower: "1,920,237",
      //     tags: ["분산형", "개미", "단타"],
      //     earn_rate: -12.7,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 2,
      //     name: "mina",
      //     follower: "1,234,543",
      //     tags: ["분산형", "단타"],
      //     earn_rate: 2.2,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 3,
      //     name: "minji",
      //     follower: "1,167,224",
      //     tags: ["집중형", "큰손", "장타"],
      //     earn_rate: 1.3,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 4,
      //     name: "junho",
      //     follower: "3,442,985",
      //     tags: ["집중형", "개미", "장타"],
      //     earn_rate: -2.7,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 5,
      //     name: "taemin",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: 8.7,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 6,
      //     name: "taemin",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: 12.7,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 7,
      //     name: "taemin",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: 3.1,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 8,
      //     name: "taemin",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: 8.7,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 9,
      //     name: "ian",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: -1.1,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 10,
      //     name: "hodong",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: -2.6,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 11,
      //     name: "jaesuk",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: -2.6,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 12,
      //     name: "minsuk",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: -2.6,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 13,
      //     name: "hia",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: -2.6,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 14,
      //     name: "jimin",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: -2.6,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   },
      //   {
      //     id: 15,
      //     name: "sorim",
      //     follower: "920,332",
      //     tags: ["집중형", "큰손", "단타"],
      //     earn_rate: -2.6,
      //     asset_rate: {
      //       EOS: 48,
      //       XRP: 30,
      //       ETH: 22
      //     }
      //   }
      // ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  font-size: 10px;
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

.trend {
  width: 200px;
  margin: 1em 0;
}

.trend-wrapper {
  /*margin-top: ;*/
  padding: 0 50px;
  justify-content: space-between;
  margin: 1em 0;
  flex-wrap: wrap;
}

.trend-kind {
  margin: 35px 50px 20px 50px;
}

.trend-kind-big {
  margin-right: 3px;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
  font-size: 20px;
  font-weight: bold;
  color: rgba(77, 79, 92, 0.77);
}

.trend-kind-small {
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP",
    "Sans-serif";
  font-size: 15px;
  font-weight: bold;
  color: rgba(77, 79, 92, 0.34);
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
</style>
