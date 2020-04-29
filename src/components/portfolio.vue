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
          <span class="tags-item"> # {{ tags[0] }} </span>
          <span class="tags-item"> # {{ tags[1] }} </span>
          <span class="tags-item"> # {{ tags[2] }} </span>
        </span>
      </div>
      <div class="flex-container">
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
                    <span class="expectMoneyVal"> 1,930,752</span>
                    <span class="expectMoneyVal counter">KRW</span>
                  </span>
                </div>
              </div>
              <div id="chartContainer">
                <doughnut></doughnut>
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
                <bar id="followerChart_container"></bar>
              </div>
            </div>
          </div>
        </card>
      </div>
    </div>
    <grey-background>
      <div class="flex-container content-area">
        <p class="personal_text">
          새겨지는 이런 어머니 말 시인의 불러 봅니다. 하나에 이름을 패, 노루,
          가난한 마리아 이런 까닭입니다. 것은 벌써 말 있습니다. 별을 한 오면
          소녀들의 비둘기, 봅니다. 새겨지는 덮어 내일 말 가난한 북간도에
          까닭입니다. 벌레는 하나에 이름과, 별 내 버리었습니다. 별에도 봄이
          책상을 어머니, 강아지, 헤일 말 위에 계십니다. 프랑시스 애기 아무 이런
          새워 보고, 하나에 봅니다. 새겨지는 계집애들의 이름을 계십니다. 나는
          계절이 잔디가 하나의 거외다. 계집애들의 오면 덮어 까닭입니다. 별을
          이름을 사랑과 나는 너무나 않은 봅니다. 이름을 묻힌 하나에 가난한 언덕
          이웃 언덕 이 불러 있습니다. 그러나 별 별빛이 사랑과 슬퍼하는 이국 별
          아직 경, 까닭입니다.
        </p>
      </div>
    </grey-background>
    <div class="table_area content-area">
      <vue-good-table :columns="columns" :rows="rows" />
    </div>
    <div class="chart-area">
      <div class="content-area">
        <candle-stick></candle-stick>
      </div>
    </div>
    <grey-background>
      <div class="content-area">
        <foot>

        </foot>
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
  data() {
    return {
      name: "코인투",
      tags: ["슈퍼리치", "단타", "분산형"],
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
          label: "수익룔",
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
      rows: [
        {
          id: 1,
          coin_name: "John",
          asset_ratio: 20,
          earn_ratio: 1.246,
          active_order: 0.03343,
          active_ask: 1234,
          recent_order: 1234,
          recent_ask: 4321
        },
        {
          id: 2,
          coin_name: "Jane",
          asset_ratio: 24,
          earn_ratio: 1234,
          active_order: 0.03343,
          active_ask: 1234,
          recent_order: 1234,
          recent_ask: 4321
        },
        {
          id: 3,
          coin_name: "Susan",
          asset_ratio: 16,
          earn_ratio: 1345,
          active_order: 0.03343,
          active_ask: 1234,
          recent_order: 1234,
          recent_ask: 4321
        }
      ]
    };
  }
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

</style>
