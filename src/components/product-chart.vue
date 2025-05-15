<template>
    <div class="py-7">
        <apexchart ref="chart" type="donut" height="320" :options="chartOptions" :series="series"></apexchart>
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
             series: [45, 21, 23, 28],
 
             chartOptions: {
                chart:{
                    height: 320,
                    type: 'donut',
                },

                 colors: ['#4f46e5', '#16a34a'],
                 labels: ["Item 1", "Item 2", "Item 3", "Item 4"],
                legend: {
                    show: true,
                    position: 'bottom',
                    offsetY: 0,
                },
                dataLabels: {
                    enabled: true,
                    dropShadow: {
                        enabled: false,
                    }
                },
                stroke: {
                    show: true,
                    colors: ['transparent'],
                },
               
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#4f46e5',
                    }
                },
                responsive: [{
                    breakpoint: 768,
                    options: {
                        chart: {
                            height: 400,
                        },
                    }
                }]
             },
         }
     },
     updated() {
       const chart = this.$refs.chart.chartObj;
       chart.renderChart(this.series, this.chartOptions);
     }
 
 }
 </script>