<template>
  <div>
    <nav-bar></nav-bar>
    <grey-background></grey-background>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import GreyBackground from "./GreyBackground";
export default {
  name: "HelloWorld",
  components: { GreyBackground, NavBar },
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
</style>
