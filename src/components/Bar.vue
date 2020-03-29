<script>
    import { Bar } from 'vue-chartjs'

    export default {
        name: "chart",
        extends: Bar,
        data() {
            return {
                chartData: {
                    labels: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12'],
                    datasets: [
                        {
                            data: [40, 20, 12, 39,13,16,2,3,4,5,6,7],
                            backgroundColor:
                                'rgba(88, 215, 255, 0.18)',
                        }
                    ]
                },
                chartOptions: {
                    legend: {
                        display: false
                    },
                    borderSkipped: [
                        'bottom',
                        'left'
                    ],
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            display: false,
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: {
                                display: false,
                            }
                        }],
                    },
                }
            }
        },
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart(this.chartData, this.chartOptions);
        }
    }
</script>

<style scoped>

</style>