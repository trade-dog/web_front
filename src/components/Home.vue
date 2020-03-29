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
  </div>
</template>

<script>
import NavBar from "./NavBar";
import GreyBackground from "./GreyBackground";
import Card from "./Card";
import TrendCard from "./TrendCard";
import doughnut from "./Doughnt";
import bar from "./Bar"


export default {
  name: "Home",
  components: {
    doughnut,
    bar,
    TrendCard,
    "nav-bar": NavBar,
    "grey-background": GreyBackground,
    card: Card
  },
  methods: {


  },

  data() {
    return {
      trendData: [
        { id: 1, name: "minsoo" },
        { id: 2, name: "mina" },
        { id: 3, name: "minji" },
        { id: 4, name: "junho" },
        { id: 5, name: "taemin" }
      ],
      //chart dataset
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      dataset: [65, 59, 80, 81, 56, 55, 40]
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

.content-area{
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
.basic_contents{
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

.follower-row {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
}

.follower-contents {
  display: flex;
  flex-direction: column;
}

.trend {
  width: 200px;
  height: 200px;
}

.trend-wrapper {
  /*margin-top: ;*/
  padding: 0 50px;
  justify-content: space-between;
  /*margin: 0 50px 0;*/
}

.trend-kind{
  margin: 35px 50px 20px 50px;
}

.trend-kind-big{
  margin-right: 3px;
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
  font-size: 20px;
  font-weight: bold;
  color: rgba(77, 79, 92, 0.77);
}

.trend-kind-small{
  font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
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
