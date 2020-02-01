<template>
  <div>
    <nav-bar></nav-bar>
    <grey-background>
      <card id="basic_info"></card>
    </grey-background>

  </div>
</template>

<script>
import NavBar from "./NavBar";
import GreyBackground from "./GreyBackground";
import Card from "./Card";
export default {
  name: "HelloWorld",
  components: {Card, GreyBackground, NavBar },
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

  #basic_info {
    z-index: 1;
    top: 2em;
    left: 10em;
    height: 16em;
    width: 50em;
  }
</style>
