<template>
    <nav-bar></nav-bar>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: 'HelloWorld',
  components: {NavBar},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
    font-size: 10px;
}
</style>
