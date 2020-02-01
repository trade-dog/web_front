<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/Home.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
html{
  /*font-size: 10px;*/
}
  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Noto Sans KR', 'Sans-serif'; }
</style>
