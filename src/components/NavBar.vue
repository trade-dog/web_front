<template>
  <header>
    <div class="content-area">
      <a href="#">
        <router-link to="/"><span id="logo_title">TradeDog</span>
<!--        <img-->
<!--          src="https://coinone.co.kr/common/assets/images/coinone_logo/coinone_logo_blue.svg"-->
<!--          id="logo"-->
<!--        />-->
        </router-link>
      </a>
      <div class="items">
        <a href="#"><span class="nav_text"><router-link to="/search">상세 검색</router-link></span></a>
        <a href="#"><span class="nav_text"><router-link to="/portfolio/1">내 포트폴리오</router-link></span></a>
        <a href="#"><span class="nav_text"><router-link to="/login">로그아웃</router-link></span></a>
<!--        <a href="#"><span class="nav_text"><router-link to="/user">정보수정</router-link></span></a>-->
      </div>

    </div>
  </header>
</template>

<script>
  import api from "./api.js"
export default {
  name: "NavBar"
};
</script>

<style scoped>
header {
  font-family: "Noto Sans KR", "Spoqa Han Sans", Sans-serif;
}

.content-area {
  width: 1200px;
  margin: auto;
  display: flex;
}


/* Change the link color to #111 (black) on hover */
#logo {
  margin-top: 1em;
}
.items {
  margin-left: auto;
  margin-top: 1em;
  margin-bottom: 1em;
}

  .nav_text {
    font-family: 'Spoqa Han Sans', 'Noto Sans KR', 'Sans-serif';
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 0 1rem 0 1rem;
  }

  a {
    text-decoration: none !important;
  }

  #logo_title {
    font-family: 'Spoqa Han Sans', 'Noto Sans KR', 'Sans-serif';
    font-weight: bold;
    font-size: 2em;
    color: #03308f;

  }
</style>
