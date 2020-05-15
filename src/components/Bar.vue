<script>
import { Bar } from "vue-chartjs";
import api from "./api";

export default {
  name: "chart",
  extends: Bar,
    props: {
      chartData: {
          type: Object,
          default: null,
      },
      options: {
          type: Object,
          default: null
      }

    },
  data() {
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options);

  },
  methods: {

  },
};
</script>

<style scoped></style>
