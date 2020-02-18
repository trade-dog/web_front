<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
#app {
  margin: 0;
  left: 0;
  width: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
}
* {
  font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Noto Sans KR", "Sans-serif";
}
</style>
