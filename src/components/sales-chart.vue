<template>
   <apexchart  type="area" height="360" :options="chartOptions" :series="series"></apexchart>
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
            name: 'Item Sales',
            data: [0, 100, 40, 110, 60, 140, 55, 130, 65, 180, 75, 115],
        }, {
            name: 'Revenue',
            data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
        }],

            chartOptions: {
                chart : {
                    height: 350,
                    type: 'area',
                    width: '100%',
                    stacked: true,
                    toolbar: {
                    show: false,
                    autoSelected: 'zoom'
                    },
                },
                colors: ['#4f46e5', '#16a34a'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: [1, 1],
                    dashArray: [3, 3],
                    lineCap: 'round',
                },
                grid: {
                padding: {
                    left: 0,
                    right: 0
                },
                strokeDashArray: 4,
                },
                markers: {
                size: 0,
                hover: {
                    size: 0
                }
                },
            xaxis: {
            type: 'month',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                show: true,
                },  
                axisTicks: {
                show: true,
                },
            },
            fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: .8,
                opacityFrom: 0.5,
                opacityTo: 0.3,
                stops: [0, 80, 100]
            }
            },
            
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
            legend: {
            position: 'bottom',
            offsetY: 0,
            },
            },
        }
    },
  

}
</script>