<script>
    import { Doughnut } from 'vue-chartjs'

    export default {
        name: "chart",
        extends: Doughnut,
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
        watch: {
            chartData() {
                this.renderChart(this.chartData, this.options)
            }
        },
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart(this.chartData, this.options)
        }
    }
</script>

<style scoped>

</style>