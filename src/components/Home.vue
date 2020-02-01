<template>
  <div>
    <nav-bar></nav-bar>
    <grey-background id="grey_bg">
      <card id="basic_info">
        <span class="CardTitle">기본정보</span>
        <div class="CardContents">
          <div class="row">
            <span class="ContentText">내 수익률</span>
            <span class="FloatArea">
              <span class="RateVal"> +24</span>
              <span class="expectMoneyVal counter">%</span>
            </span>
          </div>
          <div class="row">
            <span class="ContentText">평가금액</span>
            <span class="FloatArea">
              <span class="expectMoneyVal"> 1,930,752</span>
              <span class="expectMoneyVal counter">KRW</span>
            </span>
          </div>
        </div>
      </card>
      <card id="follower_info"></card>
    </grey-background>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import GreyBackground from "./GreyBackground";
import Card from "./Card";
export default {
  name: "Home",
  components: { Card, GreyBackground, NavBar },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  font-size: 10px;
}
#grey_bg {
  position: static;
}
#basic_info {
  float: left;
  position: relative;
  top: 2rem;
  left: 10rem;
  height: 15rem;
  width: 50rem;
}

.CardTitle {
  color: rgba(77,79,92, 0.61);
  position: relative;
  top: 1rem;
  left: 1.5rem;
  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-weight: bold;
}

.CardContents {
  color: #4D4F5C;
  width: 25rem;
  position: relative;
  top: 4rem;
  left: 4rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.ContentText { /*내 수익률*/
  margin-right: 8rem;
}

.RateVal { /*+24*/
  color: red;
}

.FloatArea {
  float: right;
}
.expectMoneyVal {/*% 및 123,456 KRW */
  color: #333333;
}
.counter {
  margin-left: 0.5rem;
}
.row{
  margin-bottom: 2rem;
}

#follower_info {
  float: right;
  position: relative;
  top: 2rem;
  right: 10rem;
  width: 20rem;
  height: 15rem;
}
</style>
