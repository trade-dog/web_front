<template>
  <nav>
    <ul>
      <a href="#home">
        <img src="https://coinone.co.kr/common/assets/images/coinone_logo/coinone_logo_blue.svg" id="logo">
      </a>

      <li style="float:right"><a href="#info">내 정보</a></li>
      <li style="float:right"><a href="#search">상세 검색</a></li>
      <li style="float:right"><a href="#portfolio">내 포트폴리오</a></li>


    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
nav {
  font-family: "Noto Sans KR", "Spoqa Han Sans", Sans-serif;
}
ul {
  list-style-type: none;
  margin: 0 10em 0;
  padding: 0;
  overflow: hidden;
  background-color: #FFFFFF;
}

li {
  float: left;
}

li a {
  display: block;
  color: #18191C;
  text-align: center;
  font-weight: 700;
  font-size: 1.3em;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
#logo {
  margin-top: 1em;
  float:left;
}

</style>
