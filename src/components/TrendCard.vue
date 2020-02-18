<template>
  <div class="card">
    <span class="data">{{ this.trendData.name }}</span>
  </div>
</template>

<script>
export default {
  name: "TrendCard",
  props: ['trendData'],
};
</script>

<style scoped>
.card {
  background-color: white;
  color: white;
  border-radius: 4px;
  box-shadow:0 3px 10px 0 rgba(66,66,66,.05);
  border: 1px solid #e4e5e8;
}
.data {
  position: relative;
  top: 1em;
  left: 1em;
  color: #43425D;
  opacity: 0.5;
}
</style>
