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
  border-radius: 4px;
  box-shadow:0 3px 10px 0 rgba(66,66,66,.05);
  border: 1px solid #e4e5e8;
}
</style>
