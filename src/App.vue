<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: "app",
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
};
</script>

<style>
  @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");

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

  a {
    color: #363636;
  }

  a:hover {
    color: #0084d1
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }


</style>
