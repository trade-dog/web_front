<script>
    import { Doughnut } from 'vue-chartjs'

    export default {
        name: "chart",
        extends: Doughnut,
        data() {
            return {
                chartData: {
                    labels: ['BTC', 'XRP', 'ETH', 'EOS'],
                    datasets: [
                        {
                            label: 'GitHub Commits',
                            data: [40, 20, 12, 39],
                            backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#DD1B16'
                            ],
                        }
                    ]
                },
                chartOptions: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 40
                        }
                    }
                }
            }
        },
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart(this.chartData, this.chartOptions)
        }
    }
</script>

<style scoped>

</style>