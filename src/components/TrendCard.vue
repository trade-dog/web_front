<template>
  <div class="card">
    <router-link :to="{ name: 'Portfolio', params: { id: this.trendData.user_id } }">
    <div class="content-area">
      <div class="top-text">
        <div class="data">{{ this.trendData.name }}</div>
        <div>
          <img src="assets/follower.png">
          <span class="follower-value">{{ this.trendData.follower }}</span>
        </div>
      </div>
      <div class="tag" :key="idx" v-for="(item, idx) in this.trendData.tags">
        #{{ item }}
      </div>
      <div class="content-text">
        <div class="earn-rate">
          <p class="content-text-title">수익률</p>
          <p class="earn_rate_value"
             :style="this.trendData.earn_rate > 0 ? {'color': 'rgb(255,13,0)'} : {'color': 'rgb(0,89,255)'}">{{ this.trendData.earn_rate.toFixed(2)}}%</p>
        </div>
        <hr>
        <div class="asset-rate">
          <div>
            <p class="content-text-title">자산비중</p>
          </div>
          <div class="asset-rate-value-wrapper">
            <div class="asset-rate-value" :key="idx" v-for="(value, title, idx) in this.trendData.asset_rate">
              <span><img class="coin-icon" :src="'assets/coins/icon-' + title + '.png'"> </span>
              <span class="asset-rate-coin"> {{ title }} </span>
              <span class="asset-rate-value"> {{ value.toFixed(2) }} % </span>
            </div>
          </div>

        </div>
      </div>


    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TrendCard",
  props: ['trendData'],
};
</script>

<style scoped>
  .card {
    background-color: white;
    color: white;
    border-radius: 4px;
    box-shadow:0 3px 10px 0 rgba(66,66,66,.05);
    border: 1px solid #e4e5e8;
  }
  .data {
    position: relative;
  }

  .content-area {
    margin: 1em auto 1em;
    width: 80%;
  }

  .top-text {
    display: flex;
    justify-content: space-between;
    font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Noto Sans KR", "Sans-serif";
    color: #43425D;
    opacity: 0.5;
    width: 100%;
    font-size: 0.8em;
    font-weight: bold;
  }

  .tag{
    font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin-right: 0.2em;
    height: 1.5em;
  }

  .content-text {
    margin-top: 1em;
  }

  .earn-rate {
    display: flex;
    width: 100%;
    justify-content: space-between;

  }

  .content-text-title {
    font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
    font-size: 0.9em;
    color: rgb(77,79,92);
    font-weight: bold;
  }

  .earn_rate_value {
    font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Noto Sans KR", "Sans-serif";
    font-size: 1.1em;
    font-weight: bold;
  }

  hr {
    margin: 0.5em 0
  }

  .asset-rate {
    display: flex;
    justify-content: space-between;
  }

  .coin-icon {
    width: 1em;
  }
  .asset-rate-value {
    display: flex;
    justify-content: space-between;
    color: rgb(77,79,92);
    font-family: "Noto Sans KR", "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
    font-size: 0.8em;
  }

  .asset-rate-value-wrapper {
    width: 60%;
  }
</style>
