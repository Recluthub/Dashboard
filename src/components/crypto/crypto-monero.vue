<template>
    <div>
      <apexchart ref="charts" type="area" height="90" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script>
  import ApexCharts from 'vue3-apexcharts'
  
  export default {
    components: {
      apexchart: ApexCharts
    },
    data() {
      return {
        series: [{
            data: [15, 20, 10, 45, 20, 10, 5]
        }],
        chartOptions: {
            chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#059669'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
      }
    }
    },
    updated() {
      const chart = this.$refs.charts.chartObj;
      chart.renderChart(this.series, this.chartOptions);
    }
  }
  </script>