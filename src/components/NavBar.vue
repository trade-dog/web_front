<template>
  <header>
    <div class="content-area">
      <a href="#home">
        <img
          src="https://coinone.co.kr/common/assets/images/coinone_logo/coinone_logo_blue.svg"
          id="logo"
        />
      </a>
      <div class="items">
        <a href="#info"><span class="nav_text">내 정보</span></a>
        <a href="#search"><span class="nav_text">상세 검색</span></a>
        <a href="#portfolio"><span class="nav_text">내 포트폴리오</span></a>
      </div>

    </div>
  </header>
</template>

<script>
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
</style>
