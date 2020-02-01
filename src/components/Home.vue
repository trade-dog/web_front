<template>
  <div>
    <nav-bar></nav-bar>
    <grey-background id="grey_bg">
      <card id="basic_info"></card>
      <card id="follower_info"></card>
    </grey-background>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import GreyBackground from "./GreyBackground";
import Card from "./Card";
export default {
  name: "HelloWorld",
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
  top: 2em;
  left: 10em;
  height: 16em;
  width: 50em;
}

#follower_info {
  float: right;
  position: relative;
  top: 2em;
  right: 10em;
  width: 20em;
  height: 16em;
}
</style>
