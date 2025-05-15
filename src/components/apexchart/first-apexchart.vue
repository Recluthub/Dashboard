<template>
    <div class="lg:col-span-8">
        <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <h6 class="text-lg font-semibold">Profit / Expenses Analytics</h6>

                <div class="position-relative">
                    <select
                        class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0"
                        id="yearchart">
                        <option value="Y" selected>Yearly</option>
                        <option value="M">Monthly</option>
                        <option value="W">Weekly</option>
                        <option value="T">Today</option>
                    </select>
                </div>
            </div>
            <div>
                <!-- <apexchart ref="chart" type="bar" height="350" :options="chartOptions" :series="series"></apexchart> -->
                <ApexCharts :options="chartOptions" type="bar" :series="series" height="350" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ApexCharts from 'vue3-apexcharts'

    const series = [{
        name: 'Profit',
        data: [500, 653, 548, 482, 553, 570, 560, 610, 580, 854, 945, 1150],
        }, 
        {
        name: 'Expenses',
        data: [246, 379, 521, 453, 243, 264, 333, 246, 468, 222, 456, 789]
    }]

const chartOptions = {
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
            autoSelected: 'zoom'
        },
        },
    grid: {
        strokeDashArray: 5,
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: '40%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: ['#4f46e5', '#10b981'],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
        title: {
            text: 'Profit / Expenses (USD)',

            style: {
                colors: ['#8492a6'],
                fontSize: '16px',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 600,
            },
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$" + val
            }
        }
    }

}

</script>