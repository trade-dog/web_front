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
                                'rgba(163,160,251,1)',
                                'rgba(255,218,131,1)',
                                'rgba(255,131,115,1)',
                                'rgba(85,216,254,1)'
                            ],
                        }
                    ]
                },
                chartOptions: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15,
                            fontFamily: "Spoqa Han Sans"
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