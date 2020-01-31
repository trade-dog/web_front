<template>
  <div>
    <b-navbar toggleable="lg" sticky="true">
      <b-navbar-brand href="#" id="brand">
        <img
          src="https://coinone.co.kr/common/assets/images/coinone_logo/coinone_logo_blue.svg"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- Navbar dropdowns -->

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav id="nav_menu">
          <b-nav-item href="#">상세 검색</b-nav-item>
          <b-nav-item href="#">내 리포트</b-nav-item>
          <b-nav-item-dropdown text="계정관리" right>
            <b-dropdown-item href="#">내 정보</b-dropdown-item>
            <b-dropdown-item href="#">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
div {
  font-size: 10px;
}
b-nav-item {
  color: rgb(24, 25, 28) !important;
}
#nav_menu {
  margin-left: auto !important;
  margin-right: 10em;
  font-family: "Noto Sans KR";
  font-size: 2em;
  font-weight: 700;
}
#brand {
  margin-left: 10em;
}
</style>
