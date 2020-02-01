<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.card {
  background-color: white;
  color: white;
  border-radius: 0.5em;
  box-shadow:0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}
</style>
